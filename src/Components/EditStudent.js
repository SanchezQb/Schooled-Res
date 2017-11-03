import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            department: ''

        }
    }
    componentWillMount() {
        this.getStudentDetails()
    }
    getStudentDetails() {
        let studentId = this.props.match.params.id
        axios.get(`http://schooled-res.herokuapp.com/api/students/${studentId}`).then(response => {
            this.setState({
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                age: response.data.age,
                department: response.data.department
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
        
    }
    editStudent(newStudent) {
        axios.request({
            method: 'put',
            url: `http://schooled-res.herokuapp.com/api/students/${this.state.id}`,
            data: newStudent
        }).then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }
    handleSubmit(e) {
        e.preventDefault();
       const newStudent = {
           firstName: this.refs.firstName.value,
           lastName: this.refs.lastName.value,
           age: this.refs.age.value, 
           department: this.refs.department.value, 
       }
       this.editStudent(newStudent)
        
    }
    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }
    render() {
        return (  
            <div>
                <br/>
                <Link to="/" className="btn grey">Back</Link>
                <h2>Edit Student</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="firstName" ref="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="lastName" ref="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)} />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field">
                        <input type="number" name="age" ref="age" value={this.state.age} onChange={this.handleChange.bind(this)}/>
                        <label htmlFor="age">Age</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="department" ref="department" value={this.state.department} onChange={this.handleChange.bind(this)} />
                        <label htmlFor="department">Department</label>
                    </div>
                    <input type="submit" value="Save" className="btn"/>
                </form>
            </div>
        )
    }
}

export default EditStudent