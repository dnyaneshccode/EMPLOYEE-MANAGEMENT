import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import AddUsers from './components/users/AddUsers';
import EditUser from './components/users/EditUser';
import Users from './components/users/Users';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
     <Router>
    <div className="App">
     <Navbar />
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/users/add" component={AddUsers}/>
       <Route exact path="/users/edit/:id" component={EditUser}/>
       <Route exact path="/users/:id" component={Users}/>
       <Route component={NotFound} />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
