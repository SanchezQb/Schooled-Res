import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: '',
            id: ''
        }
    }
    componentWillMount() {
        this.getStudentDetails()
    }
    getStudentDetails() {
        let studentId = this.props.match.params.id
        axios.get(`https://schooled-res.firebaseio.com/students/${studentId}.json`).then(response => {
            this.setState({
                details: response.data,
                id: this.props.match.params.id
            }, () => {
                console.log(response.data)
            })
        })
        .catch(err => console.log(err))
    }
    onDelete() {
        let studentId = this.props.match.params.id
        axios.delete(`https://schooled-res.firebaseio.com/students/${studentId}.json`)
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
                    <li className="collection-item">Matriculation Number: {this.state.details.matric}</li>
                    <li className="collection-item">Age: {this.state.details.age}</li>
                    <li className="collection-item">Department: {this.state.details.department}</li>
                </ul>
                <Link to={`/students/edit/${this.state.id}`} className="btn">Edit</Link>
                <button onClick={this.onDelete.bind(this)}className="btn red right">Delete</button>
            </div>
        )
    }
}

export default Details