import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Examstable from './components/Examstable';
import {BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import CreateExamComponent from './components/CreateExam';
import ExamFormContainer from './components/exam_form/ExamFormContainer.tsx';
import Editexam from './components/Editexam';
import ExamList from './components/ExamList';
import AppNav from './components/AppNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import ExamDetails from './components/ExamDetails';

class App extends Component {
  state = {  }
  render() {
      return (
          <div>
              <AppNav></AppNav>
              <Router>
              <Routes >
                <Route path="/" exact element= {<ExamDetails/>} /> 
                <Route path="/home" exact element= {<ExamDetails/>} />
                <Route path="/list" exact element= {<ExamList/>} />  
                  <Route path="exams" element= {<ExamList/>} /> 
                  <Route path="addexam" element= {<ExamFormContainer/>} /> 
                  <Route path="editexam/:id" element={<Editexam/>} />
              
               
              </Routes >
          </Router>
          </div>
        
      );
  }
}

export default App;
//    <Route exact path="/">
//<Navigate  to="/home" />
//</Route>
/*
      <Route path='/home' exact={true} component={ExamList}/>
                  <Route path='/examlist' exact={true} component={ExamList}/>
                  <Route path='/exams' exact={true} component={ExamList}/>
                  <Route path='/createexam' exact={true} component={ExamFormContainer}/>
                  <Route path='/addexam' exact={true} component={ExamFormContainer}/>
                  <Route path='/editexam/:id' component={Editexam}/>
                  */