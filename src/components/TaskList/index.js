import React from "react";
import {
  Grid,
  Box,
  withStyles,
} from "@material-ui/core";
import styles from './styles'
import TaskItem from "../TaskItem";

const TaskList = (props) => {
     const {classes, status , tasks} = props;
  return (
    <Grid item md={4} xs={12}>
      <Box mt={1} mb={1}>
        <div className={classes.status}>{status.label}</div>
      </Box>

      <div className={classes.wrapperListTask}>
        {tasks.map((task, index) => {
          return (
            <TaskItem task={task} key={index} status={status}/>
          );
        })}
      </div>
    </Grid>
  );
};

export default withStyles(styles)(TaskList);
