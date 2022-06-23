import React, { Component } from 'react'
import AppNav from './AppNav';
import '../App.css';
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';
import ExamService from '../services/ExamService';
import Modal from "react-bootstrap/Modal";


export default class Editexam extends Component {



    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            selectedItem: [],
            showDeleteDialog: false,
            exam: [],
            exam2: []
        };

        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.openDeleteDialog = this.openDeleteDialog.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
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

    openDeleteDialog(exam){
        this.setState({selectedItem: exam});
        this.setState({showDeleteDialog: true});
    }

    closeDeleteDialog(){
        this.setState({showDeleteDialog: false});
    }

    async deleteItem(){
        let uid = window.location.pathname.split('/').pop();
        const id = this.state.selectedItem.id;
        await fetch("http://localhost:8081/exams/"+uid, {
            method: 'DELETE',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            let updatedItems = this.state.exams;
            updatedItems.splice(updatedItems.findIndex(function(i){
                return i.id === id;
            }), 1);
            this.setState({guests: updatedItems, showDeleteDialog: false});
        });
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

        const {exam: exam, isLoading, showDeleteDialog, selectedItem} = this.state;

       // if (isLoading)
           // return(<div>Loading...</div>)
        return (
            <div>
               {/* <AppNav/>*/}
                <h2 className="text-center mt-5">Edit Exam details</h2>
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
                                        <Button className={"delbutton"} color="primary" type="submit" onClick={this.handleClick}>Save</Button>{' '}
                                        <Button className={"delbutton"} color="danger" onClick={() => this.openDeleteDialog(exam)}>Delete</Button>
                                        <Button className={"delbutton"} color="secondary" tag={Link} to="/home">Cancel</Button>
                                    </FormGroup>
                                </Form>
                            </Container>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <Modal show={showDeleteDialog} onHide={() => this.closeDeleteDialog()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Exam</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this exam?<br/>
                        {selectedItem.id} {selectedItem.title}</Modal.Body>
                    <Modal.Footer>
                        <Button color="danger" onClick={() => this.deleteItem()} tag={Link} to="/home">
                            Delete
                        </Button>
                        <Button color="primary" onClick={() => this.closeDeleteDialog()}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
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