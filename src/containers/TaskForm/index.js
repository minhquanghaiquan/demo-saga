import React from "react";
import { Button, TextField, withStyles, Grid, Box, MenuItem } from "@material-ui/core";
import styles from "./styles";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as taskActions from "./../../actions/task";
import * as modalActions from "./../../actions/modal";
import { reduxForm, Field } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from './validate';
import renderSelectField from '../../components/FormHelper/Select';
import { updateTask } from "../../apis/task";

const TaskForm = (props) => {
  const {taskActionsCreators, classes, modalActionCreators , handleSubmit, invalid , submitting, taskEditing } = props;
  const { hideModal } = modalActionCreators;
  const {addTask ,updateTask} = taskActionsCreators;
  
  
  const handleSubmitForm = data => {
    const {title , description , status} = data;
    if(taskEditing && taskEditing.id) {
      updateTask(title , description, status);
    }else {
      addTask(title, description);
    }
  };

  const renderStatusSelection = () => {
    let xhtml = null;
    if(taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng thái"
          className={classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      );
    }
    return xhtml;
  }
  
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container>
        <Grid item md={12}>
          <Field
            id="title"
            label="Tiêu đề"
            className={classes.textField}
            margin="normal"
            name="title"
            component={renderTextField}
            value={taskEditing? taskEditing.title : ''}
          />
        </Grid>
        <Grid item md={12}>
          <Field
            id="description"
            label="Mô tả"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
            name="description"
            component={renderTextField}
            value={taskEditing? taskEditing.description : ''}
          />
        </Grid>

        {renderStatusSelection()}

        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button variant="contained" onClick={hideModal}>
                Hủy Bỏ
              </Button>
            </Box>
            <Button
              disabled={invalid || submitting}
              variant="contained"
              color="primary"
              type="submit"
            >
              Lưu Lại
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing? state.task.taskEditing.description : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null,
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: "TASK_MANAGEMENT",
  validate
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);

