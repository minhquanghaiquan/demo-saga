import React, { Component } from 'react';
import { Route } from 'react-router-dom';


const DefaultLayoutRoute = (props)=> {
    const { component: YourComponent, ...remainProps } = props;
    
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
           
              <YourComponent {...routeProps} />
        
          );
        }}
      />
    );
  
};



export default DefaultLayoutRoute;