import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import "../../styles/Participants.css"
import ParticipantsTable from "./ParticipantsTable.js"
import Student from '../../models/Student.ts';
import { isThisSecond } from 'date-fns';


class Students extends React.Component {

    students = [
        new Student(1, "omar", "omar@gamil.com", "23/4/1990", "49387587r65"),
        new Student(2, "rawan", "rawan@gamil.com", "23/4/1990", "49387587r65"),
        new Student(3, "test", "test@gamil.com", "23/4/1990", "49387587r65"),
        new Student(4, "nour", "nour@gamil.com", "23/4/1990", "49387587r65"),
        new Student(5, "achmed", "achmed@gamil.com", "23/4/1990", "49387587r65")
    ]


    constructor(props){
        super(props);
        console.log(this.students)
        
        this.state = {
            student: new Student(), 
            addedStudents: [],
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
        }
    }

    // handleChange = (event) => {
    //     this.setState({email: event.target.value});
    // }

    // addNewStudent = () => {
    //   this.setState({addedStudents: [...this.state.addedStudents, 'new value']})

    //     // sent to parent
    //     this.props.onNewStudent(this.state.email)
    // }


    callback = (student)=>{
      console.log(student);
      student.name.toLowerCase().indexOf(this.state.student.name.toLowerCase())
    }
    

    onChange = e => {
        // const { suggestions } = this.props;
        // this.setState({studentName: e.target.value});
        const studentName = e.currentTarget.value;


    
        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = this.students.filter(function(student)
          {
            return student.name.toLowerCase().indexOf(studentName.toLowerCase()) > -1
          }
        );

        // student =>
        //     student.name.toLowerCase().indexOf(studentName.toLowerCase()) > -1

        console.log(filteredSuggestions);
    
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          studentName: e.currentTarget.value
        });
      };
    
      onClick = e => {
        // this.setState({addedStudents: [...this.state.addedStudents, 'new value']})

        // sent to parent
        this.props.onNewStudent(this.state.filteredSuggestions[0]);

        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          studentName: e.currentTarget.innerText
        });
        
      };
    
      onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        // User pressed the enter key
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            studentName: filteredSuggestions[activeSuggestion]
          });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
      };

    render (){
        let suggestionsListComponent;

        if (this.state.showSuggestions && this.state.studentName) {
        if (this.state.filteredSuggestions.length) {
            suggestionsListComponent = (
            <ul className="suggestions">
                {this.state.filteredSuggestions.map((suggestion, index) => {
                let className;

                // Flag the active suggestion with a class
                if (index === this.state.activeSuggestion) {
                    className = "suggestion-active";
                }

                return (
                    <li className={className} key={suggestion.id} onClick={this.onClick}>
                      {suggestion.name}
                    </li>
                );
                })}
            </ul>
            );
        } else {
            suggestionsListComponent = (
            <div className="no-suggestions">
                <em>No suggestions, you're on your own!</em>
            </div>
            );
        }
        }
        return (
            
            <div className="participants-container">
                <Box style={{paddingBottom: 20}}>
                
                    <Field onChange={this.onChange} onKeyDown={this.onKeyDown} value={this.state.student.name} fullWidth variant="outlined" name={this.props.name} component={TextField} label={this.props.label} />
                </Box>
                {suggestionsListComponent}
                {/* <Button onClick={this.addNewStudent} fullWidth color="primary" variant="contained" type="button"> Add</Button> */}
                
                
                <ParticipantsTable students={this.props.students} />
            </div>
        );
    }
    
}

export default Students;
