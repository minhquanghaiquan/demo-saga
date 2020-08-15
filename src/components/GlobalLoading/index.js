import React from "react";
import LoadingIcon from "./../../assets/images/throbber_12.gif";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as uiActions from "./../../actions/ui";

const GlobalLoading = (props) => {
  const { classes, showLoading } = props;
  if (showLoading) {
    return (
      <div className={classes.globalLoading}>
        <img src={LoadingIcon} alt="loading" className={classes.icon} />
      </div>
    );
  }else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(GlobalLoading)
);
