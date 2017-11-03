import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: props.item
        }
    }
    render() {
        return(
            <li className="collection-item">
            <Link to={`/students/${this.state.item.id}`}>{this.state.item.firstName} {this.state.item.lastName}</Link>
            </li>
        )
    }
}

export default StudentItem
