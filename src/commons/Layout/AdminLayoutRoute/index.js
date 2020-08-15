import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard';

const AdminLayoutRoute = (props)=> {
    const { component: YourComponent, ...remainProps } = props;
    
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <Dashboard {...remainProps}>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  
};



export default AdminLayoutRoute;