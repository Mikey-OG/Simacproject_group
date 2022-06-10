import React from "react";
import { Box, Button } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import "../../styles/Participants.css";
import Invigilator from "../../models/Invigilator.ts";
import ParticipantsTable from "./ParticipantsTable.js";
import { getAllInvigilators } from "../../api/Api.ts";

class Invigilators extends React.Component {
	invigilators = [];

	constructor(props) {
		super(props);
		console.log(this.invigilators);

		this.state = {
			invigilatorName:"",
			addedStudents: [],
			activeSuggestion: 0,
			// The suggestions that match the user's input
			filteredSuggestions: [],
			// Whether or not the suggestion list is shown
			showSuggestions: false,
		};
  	}
	
	componentDidMount(){
		getAllInvigilators()
		.then(res => {
			this.invigilators = res.data
			console.log(this.invigilators)
		})
		.catch((error) => {
			// handle error
			console.log(error);
		})
	
	}

	onInputChange = (e) => {
		const invigilatorName = e.currentTarget.value;

		// Filter suggestions that don't contain the user's input
		const filteredSuggestions = this.invigilators.filter(function (invigilator) {
			return (
				invigilator.name.toLowerCase().indexOf(invigilatorName.toLowerCase()) > -1
			);
		});

		this.setState({
			activeSuggestion: 0,
			filteredSuggestions,
			showSuggestions: true,
			invigilatorName: e.currentTarget.value,
		});
	};

	onSuggestionClick = (e) => {
		// send to parent
		this.props.onNewInvigilator(
			this.state.filteredSuggestions[this.state.activeSuggestion]
		);

		//remove added ing from sugg list
		const index = this.invigilators.indexOf(this.state.filteredSuggestions[this.state.activeSuggestion]);

		if (index > -1) {
			this.invigilators.splice(index, 1); // 2nd parameter means remove one item only
		}

		this.setState({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			invigilatorName: "",
		});
	};

	onMouseEnter = (e) => {
		const { filteredSuggestions } = this.state;

		//find selected invigilator
		let invigilator = filteredSuggestions.find((invigilator) => {
			return invigilator.email === e.target.innerText.split(" ")[1];
		});

		//update selected student index
		this.setState({
			activeSuggestion: filteredSuggestions.indexOf(invigilator),
		});
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

	createSuggestions = () => {
		let suggestionsListComponent;
		if (this.state.showSuggestions && this.state.invigilatorName) {
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
					value={this.state.invigilatorName}
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

export default Invigilators;
