import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './Components/Main';
import Nav from './Components/Nav';
const App = () => {
  return (
     <div>
      <Nav />
      <div className = "container">
        <Main />
      </div>
      <div className="fixed-action-btn">
        <Link to="/students/add" className="btn-floating btn-large red"><i className="fa fa-plus"></i></Link>
      </div>
      
    </div>
  )
}

export default App;
