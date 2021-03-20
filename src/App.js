
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotMatched from './Components/NotMatched/NotMatched';

export const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
    <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <PrivateRoute path="/destination/:name">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatched></NotMatched>
          </Route>
        </Switch>
    </Router>
     
    </UserContext.Provider>
  );
}

export default App;
