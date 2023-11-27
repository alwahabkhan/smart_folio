import React from 'react';
import SignUp from "views/signup";
import Navbar from "components/navBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from 'routes'
import AppState from 'appState/appState';
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <AppState>
      <Router>
        <Navbar />
        <ToastContainer/>
        <Routes>
          {routes.map((item, index) => <Route exact path={item.route} element={item.component} key={index} />)}
        </Routes>
      </Router>
    </AppState>
  );
}

export default App;
