import React, {  useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "./../../constants/index";
import TaskList from "../../components/TaskList";
import TaskForm from "../TaskForm";
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/task";
import * as modalActions from "./../../actions/modal";
import { connect } from "react-redux";
import SearchBox from "../../components/SearchBox";
import { Box } from "@material-ui/core";

const TaskBoard = (props) => {
  const { classes, taskActionsCreator, listTask, modalActionsCreator } = props;
  const { fetchListTask, filterTask, setTaskEditing } = taskActionsCreator;
  const {
    showModal,
    changeModalTitle,
    changeModalContent,
    hideModal
  } = modalActionsCreator;

  const {deleteTask} = taskActionsCreator;
 

  useEffect(() => {
    fetchListTask();
  }, []);



  const handleOpen = () => {
    setTaskEditing(null);
    showModal();
    changeModalTitle("Thêm mới công việc");
    changeModalContent(<div/>);
  };

  const handleFilter = (e) => {
    filterTask(e.target.value);
  };

  const onClickEdit = (task) => {
    setTaskEditing(task);

    showModal();
    changeModalTitle("Cap nhat cong viec");
    changeModalContent(<div />);
  };

  const showModalDeleteTask  = (task) => {
    showModal();
    changeModalTitle("Xóa công việc");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa{" "}
          <span className={classes.modalConfirmTextBold}>{task.title}</span>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
              Hủy Bỏ
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDeleteTask(task)}
            >
              Đồng Ý
            </Button>
          </Box>
        </Box>
      </div>
    );
  };

  const handleDeleteTask = (task) => {
    const { id } = task;
    deleteTask(id);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        <AddIcon /> Them moi cong viec
      </Button>

      <SearchBox handleChange={handleFilter} />

      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              key={index}
              tasks={taskFiltered}
              status={status}
              onClickEdit={onClickEdit}
              onClickDelete={showModalDeleteTask}
            />
          );
        })}
      </Grid>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionsCreator: bindActionCreators(taskActions, dispatch),
    modalActionsCreator: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
