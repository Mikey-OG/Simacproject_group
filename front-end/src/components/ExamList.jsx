import React, {Component, useState} from "react";
import {Table, Button, Input} from "reactstrap";
//import AppNav from "../Components/AppNav";
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import AppNav from "./AppNav";
import { Route , withRouter} from 'react-router-dom';

class ExamList extends Component {

    // state = {
    //     isLoading : true,
    //     Guests : []
    // }

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            selectedItem: [],
            showDeleteDialog: false,
            filter :"",
            exams : []
        };

        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.openDeleteDialog = this.openDeleteDialog.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    }

    editItem(id){
        this.props.history.push(`/editexam/${id}`);
    }

    openDeleteDialog(exam){
        this.setState({selectedItem: exam});
        this.setState({showDeleteDialog: true});
    }

    closeDeleteDialog(){
        this.setState({showDeleteDialog: false});
    }

    async deleteItem(){
        const id = this.state.selectedItem.id;
        await fetch(`/exams/${id}`, {
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

    async componentDidMount(){
        const response = await fetch("http://localhost:8081/exams/");
        console.log("response",response)
        const body = await response.json();
        console.log("body",body)
        this.setState({exams :body , isLoading: false});

    }

    refreshPage() {
        window.location.reload(false);
    }

    searchTxt(e){
        this.setState({filter:e.target.value});
    }

    render() {
       
        const {filter,exams , isLoading, showDeleteDialog, selectedItem} = this.state;

        // if (isLoading)
        //    return(<div>Loading...</div>)

        let DataSearch = exams.filter(item => {
            return Object.keys(item).some(key => item.title.toLowerCase().includes(filter.toLowerCase()))
        });

        let rows=
            DataSearch.map(item =>
                <tr id={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.subject}</td>
                    <td>{item.dateTime}</td>
                    <td>{item.duration}</td>
                    <td>{item.description}</td>
                    <td><Button style={{marginRight: '10px'}} size="sm" color="primary"
                                onClick={() => this.editItem(item.id)}>Edit</Button>

                        <Button size="sm" color="danger" onClick={() => this.openDeleteDialog(item)}>Delete</Button></td>
                </tr>
            );

        return (
            <div>

                <h2 className="text-center mt-5">Exam List</h2>
                <hr/>
                <Input type="text" placeholder="Search by exam title" style={{width:200,height:25, marginLeft:300}} value={filter} onChange={this.searchTxt.bind(this)}></Input>
                <div style={{position: 'absolute', left: '45%', transform: 'translate(-46%)'}} className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <Table style={{width: 980}} className="mt-4">
                                <thread>
                                    <tr>
                                        <th>Exam ID</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Subject</th>
                                        <th>Date</th>
                                        <th>Duration</th>
                                        <th>Description</th>
                                    </tr>
                                    <tbody>
                                    {rows}
                                    </tbody>
                                </thread>
                            </Table>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
                <Modal show={showDeleteDialog} onHide={() => this.closeDeleteDialog()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Exam</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this exam?<br/>
                        {selectedItem.id} {selectedItem.title}</Modal.Body>
                    <Modal.Footer>
                        <Button color="danger" onClick={() => this.deleteItem()}>
                            Delete
                        </Button>
                        <Button color="primary" onClick={() => this.closeDeleteDialog()}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ExamList;
