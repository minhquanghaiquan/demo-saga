import React from "react";
import {
  Grid,
  Box,
  Typography,
  CardContent,
  Card,
  CardActions,
  withStyles,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import styles from "./styles";

const TaskItem = (props) => {
  const { classes, task, status, onClickEdit, onClickDelete } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography component="h2">{task.title}</Typography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
        <p>
             {task.description}
        </p>
      </CardContent>

      <CardActions className={classes.CardActions}>
        <IconButton aria-label="edit" onClick={onClickEdit}>
          <EditIcon/>
        </IconButton>
        <IconButton aria-label="delete" onClick={onClickDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(TaskItem);
