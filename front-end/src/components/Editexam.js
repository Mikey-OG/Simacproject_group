import React, { Component } from 'react'
import AppNav from './AppNav';
import '../App.css';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';
import ExamService from '../services/ExamService';


export default class Editexam extends Component {



    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            exam: [],
            exam2: []
        };

        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    async handleSubmit(event){
        event.preventDefault();
        const exam = this.state.exam;
		ExamService.createExam(exam);
        //console.log(this.state);
        console.log('updating exam',this.exam);

        this.props.history.push("/home");
    }

    handleChange(event){
        const target= event.target;
        const value= target.value;
        const name = target.name;
        let exam={...this.state.exam};
        exam[name] = value;
        this.setState({exam: exam});
        //console.log(item);
    }

    async componentDidMount() {

        let uid = window.location.pathname.split('/').pop();
        //const response = await fetch(`/http://localhost:8081/exams/${uid}`);
        const response = await fetch("http://localhost:8081/exams/"+uid);
        console.log("response is",response);
        const body = await response.json();
        console.log("body is",body);
        this.setState({exam : body, isLoading: false});
        //let param = ;
       // let uid = window.location.pathname.split('/').pop();
       // this.state.exam2=ExamService.getExamById(uid);
        let exam3 =ExamService.getExamById(uid);
        console.log("exam2 is",this.state.exam2);
        console.log("exam3 is",exam3);
        //console.log(body);
    }


    render() {

        const {exam: exam, isLoading} = this.state;

       // if (isLoading)
           // return(<div>Loading...</div>)
        return (
            <div><AppNav/>
                <h2 className="text-center mt-5">Edit Item</h2>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <Container className="mt-5">
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label for="id">Exam ID</Label>
                                        <Input type="number" name="id" id="id" value={exam.id} onChange={this.handleChange}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="title">Title</Label>
                                        <Input type="text" name="title" id="title" value={exam.title} onChange={this.handleChange}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="type">Type</Label>
                                        <Input type="text" name="type" id="type" value={exam.type} onChange={this.handleChange}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="subject">subject</Label>
                                        <Input type="text" name="subject" id="subject" value={exam.subject} onChange={this.handleChange}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="dateTime">DateTime</Label>
                                        <Input type="text" name="dateTime" id="dateTime" value={exam.dateTime} onChange={this.handleChange}></Input>
                                    </FormGroup>
									<FormGroup>
                                        <Label for="duration">Duration</Label>
                                        <Input type="text" name="duration" id="duration" value={exam.duration} onChange={this.handleChange}></Input>
                                    </FormGroup>
									<FormGroup>
                                        <Label for="description">Ddescription</Label>
                                        <Input type="text" name="description" id="description" value={exam.description} onChange={this.handleChange}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button color="success" type="submit" onClick={this.handleClick}>Edit</Button>{' '}
                                        <Button color="secondary" tag={Link} to="/home">Cancel</Button>
                                    </FormGroup>
                                </Form>
                            </Container>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div> );
    }
}
/*
    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.subject}</td>
                    <td>{item.dateTime}</td>
                    <td>{item.duration}</td>
                    <td>{item.description}</td>
*/
/*
  async handleSubmit(event){
        event.preventDefault();
        const exam = this.state.exam;
		await fetch('http://localhost:8081/exams/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(exam),
        });
*/