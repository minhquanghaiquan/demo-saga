import React from "react";
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { NavLink } from "react-router-dom";
import styles from "./styles";
import { ADMIN_ROUTES } from "./../../../constants";

const Sidebar = (props) => {
  const { classes, onToggleSidebar, showSidebar } = props;
  const toggleDrawer = (value) => {
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  };

  const renderList = () => {
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item) => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
              >
                <ListItem className={classes.menuItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };

  return (
    <Drawer
      open={showSidebar}
      onClose={() => toggleDrawer(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="persistent"
    >
      {renderList()}
    </Drawer>
  );
};

export default withStyles(styles)(Sidebar);
