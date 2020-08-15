import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import cn from "classnames";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./styles";
import * as uiActions from "./../../actions/ui";

const Dashboard = (props) => {
  const { children, classes, name, showSidebarValue, uiActionCreators } = props;
  const { showSidebar, hideSidebar } = uiActionCreators;

  const handleToggleSidebar = (value) => {
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };

  return (
    <div className={classes.dashboard}>
      <Header
        name={name}
        showSidebar={showSidebarValue}
        onToggleSidebar={handleToggleSidebar}
      />
      <div className={classes.wrapper}>
        <Sidebar
          showSidebar={showSidebarValue}
          onToggleSidebar={handleToggleSidebar}
        />
        <div
          className={cn(classes.wrapperContent, {
            [classes.shiftLeft]: showSidebarValue === false,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showSidebarValue: state.ui.showSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
