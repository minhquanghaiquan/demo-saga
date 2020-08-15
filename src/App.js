import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "./components/GlobalLoading";
import CommonModal from "./components/Modal/index";
import { BrowserRouter, Switch } from "react-router-dom";
import { ADMIN_ROUTES, ROUTES } from "./constants";
import AdminLayoutRoute from "./commons/Layout/AdminLayoutRoute/index";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { ThemeProvider } from '@material-ui/styles';
import theme from './commons/Theme/index';
import { CssBaseline } from "@material-ui/core";
import DefaultLayoutRoute from "./commons/Layout/DefaultLayoutRoute";

const store = configureStore();

function App() {
  const renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route, index) => {
      console.log(route);
      return <AdminLayoutRoute 
      key={index + 1} 
      path={route.path} 
      component={route.component} 
      exact={route.exact} 
      name = {route.name}
      />;
    });
    return xhtml;
  };

  const renderDefaultRoutes = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route, index) => {
      console.log(route);
      return <DefaultLayoutRoute 
      key={index + 1} 
      path={route.path} 
      component={route.component} 
      exact={route.exact} 
      name = {route.name}
      />;
    });
    return xhtml;
  };

  return (
    <BrowserRouter>
    <Provider store={store}>
      
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <GlobalLoading />
          <CommonModal />
          <Switch>
            {renderAdminRoutes()}
            {renderDefaultRoutes()}
          </Switch>
        
          </ThemeProvider>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
