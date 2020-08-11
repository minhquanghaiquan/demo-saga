import React from "react";
import Taskboard from "./containers/Taskboard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Taskboard />
      
    </div>
  );
}

export default App;
