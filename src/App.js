import './App.css';
import Home from './components/Home/Home/Home'
import Dashboard from './components/Dashboard/Dashboard/Dashboard'
import Admin from './components/Admin/Admin/Admin'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Orders from './components/Dashboard/Orders/Orders';
import AddReviews from './components/Dashboard/AddReviews/AddReviews';
import Orderlist from './components/Admin/Orderlist/Orderlist';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="app">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard/dashboard/:_id">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/addReviews">
              <AddReviews />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/orderlist">
              <Orderlist />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
