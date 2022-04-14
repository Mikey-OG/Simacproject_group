import React, { Component } from 'react'
import ExamService from '../services/ExamService';

class Examstable extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			exams: []
			
		}

		this.addExam = this.addExam.bind(this);
		//this.updateStudent = this.updateStudent.bind(this);
		//this.deleteStudent = this.deleteStudent.bind(this);
	}
	
	componentDidMount(){
		ExamService.getExams().then((res) => {
			this.setState({ exams: res.data });
		});}
        addExam(){
            this.props.history.push('/add-exam/_add');
        }
        render() {
            return (
                <div>
                
                    <h2 className="text-center">Exams List</h2>
                    <div className="row">
					
				</div>
                    <div className = "row">
                        <table className = "table table-striped table-bordered">
                        
                            <thead>
                                <tr>
                                     <th> ID</th>
                                    <th> Title</th>
                                    <th> Type</th>  
                                    <th> Subject</th>
                                    <th> Date</th>
                                    <th> Time</th>
                                    <th> Location</th>
                                    <th> Duration</th>
                                    <th> Description</th>
                                </tr>
                            </thead>         
                            <tbody>
                                {
                                    this.state.exams.map(
                                        exam =>
                                        <tr key =  {exam.id}>
                                               <td> {exam.id} </td>
                                            <td> {exam.title} </td>
                                            <td> {exam.type} </td>      
                                            <td> {exam.subject} </td> 
                                            <td> {exam.date} </td> 
                                            <td> {exam.time} </td> 
                                            <td> {exam.location} </td> 
                                            <td> {exam.duration} </td> 
                                            <td> {exam.description} </td> 
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                </div>
            </div>	
            )
        }
	}
    export default Examstable