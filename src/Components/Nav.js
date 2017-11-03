import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
        <div>
               <nav className="green">
                <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Schooled</a>
                <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/"><i className="fa fa-users"></i>  Students</Link></li>
                </ul>
                <ul className="side-nav" id="main-menu">
                    <li><Link to="/"><i className="fa fa-users"></i>Students</Link></li>
                    <li><Link to="/students/add"><i className="fa fa-plus"></i>Add Students</Link></li>
                    <li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li>
                </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Nav