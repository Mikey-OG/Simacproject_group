import React, { Component } from 'react';
import ExamService from '../services/ExamService';


class CreateExam extends Component {
	constructor(props){
		super(props)

		this.state = {
			//Step 2
			id: this.props.match.params.id,
			title: '',
			type: '',
			subject: '',
            date: '',
            time: '',
            location: '',
            duration: '',
            description: ''

		}

		this.changeTitleHandler = this.changeTitleHandler.bind(this);
		this.changeTypeHandler = this.changeTypeHandler.bind(this);
		this.saveOrUpdateExam = this.saveOrUpdateExam.bind(this);
	}

	changeTitleHandler=(event) => {
		this.setState({title: event.target.value});
	}

		changeTypeHandler=(event) => {
		this.setState({type: event.target.value});
	}

		changeSubjectHandler=(event) => {
		this.setState({subject: event.target.value});
	}

	saveOrUpdateExam = (event) => {
		event.preventDefault();
		let exam = {title: this.state.title,  type: this.state.type, subject: this.state.subject};
		console.log('exam => ' + JSON.stringify(exam));


		//Step 5
		if(this.state.id === '_add'){
			ExamService.createExam(exam).then(res =>{
				this.props.history.push('/exams');
			});
		}else{
		//	StudentService.updateStudent(student, this.state.id).then( res => {
		//		this.props.history.push('/students');
		//	});
        console.log('exam => ' + JSON.stringify(exam));
        console.log('update not available yet ' );
		}

	}

	cancel(){
		this.props.history.push('/exams');
	}

	//Step 3
	componentDidMount(){

		//Step 4
		if (this.state.id === '_add'){
			//This  is for create student
			return
		}else{ //This is for update student
			ExamService.getExamById(this.exam.id).then( (res) => {
				let exam = res.data;
				this.setState({title: exam.title,
					type: exam.type,
					subject: exam.subject
				});
			});
		}
	}

	getTitle(){
		if(this.state.id === '_add'){
			return <h3 className="text-center">Add Exam</h3>
		}else{
			return <h3 className="text-center">Update Exam</h3>
		}
	}
	render() {
		return (
			<div>
				<div className = "container">
					<div className = "row">
						<div className = "card col-md-6 offset-md-3 offset-md-3">
							{/*<h3 className="text-center">Add Student</h3> */}
							{
								this.getTitle()
							}
							<div className="card-body">
								<form>
									<div className="form-group">
										<label>Title: </label>
										<input placeholder="Title" name="Title" className="form-control"
											value={this.state.title} onChange={this.changeTitleHandler}/>
									</div>
									<div className="form-group">
										<label>Type: </label>
										<input placeholder="Type" name="Type" className="form-control"
											value={this.state.type} onChange={this.changeTypeHandler}/>
									</div>
									<div className="form-group">
										<label>Subject: </label>
										<input placeholder="Subject" name="Subject" className="form-control"
											value={this.state.subject} onChange={this.changeSubjectHandler}/>
									</div>
									<button className="btn btn-success" onClick={this.saveOrUpdateExam}>Save</button>
									<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
								</form>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default CreateExam;