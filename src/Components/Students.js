import React, { Component } from 'react';
import axios from 'axios';
import StudentItem from './StudentItem';

class Students extends Component {
    constructor() {
        super()
        this.state = {
            students: []
        }
    }
    componentWillMount() {
        this.getStudents();
    }
    getStudents() {
        axios.get('http://schooled-res.herokuapp.com/api/students').then(response => {
            this.setState({
                students: response.data
            }, () => {
                //console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }

    
    render() {
        const studentItems = this.state.students.map((student, i) => {
            return (
                <StudentItem key={student.id} item={student}/>
            )
        })
        return (
            <div>
                <h2>Students</h2>
                <ul className="collection">
                    {studentItems}
                </ul>
            </div>
        )
    }
}

export default Students