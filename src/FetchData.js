import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

var styles = {
	"dataStyle": {
		"marginTop": "20px",
		"marginBottom": "20px",
		"color": "blue",
	}
}

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
		    "detect_time": ["No time"],
		    "usr_email": ["No email"],
		    "usr_heart_rate": ["No heart rate"],
		};
	}
    
    onNameTextFieldChange = (event) => {
		// Update the nameTextField state whenever the text field is changed or perturbed in any way:
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		console.log(this.state.nameTextField); // log the current nameTextField content
	}
	
	getData = () => {
		axios.get("http://127.0.0.1:5000/api/heart_rate/" + "jen.wei.wang@duke.edu").then( (response) => {
			console.log(response);
			console.log(response.status);
			this.setState({	
			"detect_time": response.data.detect_time,
		    "usr_email": response.data.usr_email,
		    "usr_heart_rate": response.data.usr_heart_rate,			
			});
		})	
	}

	render() {
		return (
			<div>
				<Button variant="raised" onClick={this.getData}>
					Get Data
				</Button>
				<div style={styles.dataStyle}>
					{this.state.detect_time}
				
				</div>
				
				<div style={styles.dataStyle}>
					{this.state.user_email}
				
				</div>
				
				<div style={styles.dataStyle}>
					{this.state.usr_heart_rate}
				
				</div>                
				
				<div style={styles.dataStyle}>
					{this.state.data}
				
				</div>
			</div>
		)
	}
}

export default FetchData;
