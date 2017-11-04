import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddStudent extends Component {
    addNewStudent(newStudent) {
        axios.request({
            method: 'post',
            url: 'https://schooled-res.firebaseio.com/students.json',
            data: newStudent
        }).then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }
    handleSubmit(e) {
        e.preventDefault();
       const newStudent = {
           matric: this.refs.matric.value,
           firstName: this.refs.firstName.value,
           lastName: this.refs.lastName.value,
           age: this.refs.age.value, 
           department: this.refs.department.value, 
       }
       this.addNewStudent(newStudent)
        
    }
    render() {
        return (  
            <div>
                <br/>
                <Link to="/" className="btn grey">Back</Link>
                <h2>Add Student</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="number" name="matric" ref="matric" />
                        <label htmlFor="matric">Matriculation Number</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="firstName" ref="firstName" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="lastName" ref="lastName" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field">
                        <input type="number" name="age" ref="age" />
                        <label htmlFor="age">Age</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="department" ref="department" />
                        <label htmlFor="department">Department</label>
                    </div>
                    <input type="submit" value="Save" className="btn"/>
                </form>
            </div>
        )
    }
}

export default AddStudent