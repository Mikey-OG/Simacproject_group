import React from "react";
import { Box } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import ParticipantsTable from "./ParticipantsTable.js";
import "../../styles/Participants.css";
import Student from "../../models/Student.ts";

class Students extends React.Component {
  students = [
    new Student(1, "omar", "omar@gamil.com", "23/4/1990", "49387587r65"),
    new Student(2, "rawan", "rawan@gamil.com", "23/4/1990", "49387587r65"),
    new Student(3, "test", "test@gamil.com", "23/4/1990", "49387587r65"),
    new Student(4, "nour", "nour@gamil.com", "23/4/1990", "49387587r65"),
    new Student(5, "achmed", "achmed@gamil.com", "23/4/1990", "49387587r65"),
  ];

  constructor(props) {
    super(props);
    console.log(this.students);

    this.state = {
      student: new Student(),
      addedStudents: [],
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
    };
  }

  onInputChange = (e) => {
    const studentName = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = this.students.filter(function (student) {
      return student.name.toLowerCase().indexOf(studentName.toLowerCase()) > -1;
    });

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      studentName: e.currentTarget.value,
    });
  };

  onSuggestionClick = (e) => {
    // send to parent
    this.props.onNewStudent(
      this.state.filteredSuggestions[this.state.activeSuggestion]
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      studentName: e.currentTarget.innerText,
    });
  };

  onMouseEnter = (e) => {
    const { filteredSuggestions } = this.state;

    //find selected student
    let student = filteredSuggestions.find((student) => {
      return student.email === e.target.innerText.split(" ")[1];
    });

    //update selected student index
    this.setState({ activeSuggestion: filteredSuggestions.indexOf(student) });
  };

  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the up arrow
    if (e.keyCode === 38) {
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

  // suggestions list under the input
  createSuggestions = () => {
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
                <li
                  className={className}
                  key={suggestion.id}
                  onClick={this.onSuggestionClick}
                  onMouseEnter={this.onMouseEnter}
                >
                  {suggestion.name}, {suggestion.email}
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
      return suggestionsListComponent;
    }
  };

  render() {
    let suggestionsListComponent = this.createSuggestions();

    return (
      <div className="participants-container">
        <Box id="student-search">
          <Field
            onChange={this.onInputChange}
            onKeyDown={this.onKeyDown}
            value={this.state.student.name}
            fullWidth
            variant="outlined"
            name={this.props.name}
            component={TextField}
            label={this.props.label}
          />
        </Box>

        {suggestionsListComponent}

        <ParticipantsTable participants={this.props.participants} />
      </div>
    );
  }
}

export default Students;
