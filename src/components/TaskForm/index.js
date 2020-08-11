import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  withStyles,
} from "@material-ui/core";
import styles from "../TaskItem/styles";

const TaskForm = (props) => {
  const { open, handleClose, handleOpen, classes } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowMax="4"
          className={classes.textField}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(TaskForm);
