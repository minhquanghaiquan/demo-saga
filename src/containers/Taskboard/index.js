import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "./../../constants/index";
// import { Card, CardContent, CardActions, Typography, Box, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle } from "@material-ui/core";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/task";
import { connect } from "react-redux";



const TaskBoard = (props) => {
  const { classes, taskActionsCreator, listTask} = props;
  const {fetchListTask} = taskActionsCreator;
  const [open, setOpen] = useState(false);


  useEffect(() => {
    fetchListTask();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        <AddIcon /> Them moi cong viec
      </Button>
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return <TaskList key={index} tasks={taskFiltered} status={status} />;
        })}

        <TaskForm open={open} handleClose={handleClose} />
      </Grid>
    </div>
  );
};

TaskBoard.propTypes = {};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionsCreator: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskBoard)
);
