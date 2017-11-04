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
        axios.get('https://schooled-res.firebaseio.com/students.json').then(response => {
            const studentsArray = []
            for(let key in response.data) {
                response.data[key].id = key
                studentsArray.push(response.data[key])
            }
            console.log(response.data)
            this.setState({
                students: studentsArray
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