import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: ''
        }
    }
    componentWillMount() {
        this.getStudentDetails()
    }
    getStudentDetails() {
        let studentId = this.props.match.params.id
        axios.get(`http://localhost:3000/api/students/${studentId}`).then(response => {
            this.setState({
                details: response.data
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }
    onDelete() {
        let studentId = this.state.details.id
        axios.delete(`http://localhost:3000/api/students/${studentId}`)
            .then(response => {
                this.props.history.push('/')
            }).catch(err => console.log(err))

    }
    render() {
        return (  
            <div>
                <br/>
                <Link to="/" className="btn grey">Back</Link>
                <h3>{this.state.details.firstName} {this.state.details.lastName}</h3>
                <ul className="collection">
                    <li className="collection-item">Age: {this.state.details.age}</li>
                    <li className="collection-item">Department: {this.state.details.department}</li>
                </ul>
                <Link to={`/students/edit/${this.state.details.id}`} className="btn">Edit</Link>
                <button onClick={this.onDelete.bind(this)}className="btn red right">Delete</button>
            </div>
        )
    }
}

export default Details