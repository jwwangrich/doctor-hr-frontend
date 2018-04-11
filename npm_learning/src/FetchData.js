import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


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
		    "nameTextField": "",
		    "times": ["No time"],
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
		axios.get("http://vcm-3539.vm.duke.edu:5000/api/heart_rate/" + this.state.nameTextField).then( (response) => {
			console.log(response);
			console.log(response.status);
			this.setState({"times": response.data.times});
		    this.setState({"usr_heart_rate": response.data.usr_heart_rate});			
		})	
	}
    
    generateTableDataForLoop = () => {
		    
		var prettyTableData = [];

		for (var i = 0; i < this.state.times.length; i++) {
			    prettyTableData.push(
				        <TableRow>
					            <TableCell> {this.state.times[i]} </TableCell>
					            <TableCell> {this.state.usr_heart_rate[i]} </TableCell>
				        </TableRow>
			    );
		}
		return prettyTableData;
	}
    
    
	render() {
		    var prettyTableData = this.generateTableDataForLoop();
		    return (
			        <div style={ {"marginLeft": "20px", "marginBottom": "10px"}}>
				        <TextField 
					        value={this.state.nameTextField}
					        onChange={this.onNameTextFieldChange}/>
				        <Button onClick={this.onButtonClick}>
				        <div style={{"backgroundColor": "yellow", "color": "red"}}>
					            Logging
				
				        </div>
				        </Button>
			
				        {this.state.nameTextField /*show the current nameTextField state here in the browser */} 
				
				        <Button variant="raised" onClick={this.getData}>
					        Get Data
				        </Button>

				        <Table>
					            <TableHead>
						                <TableRow>
							                    <TableCell> {this.props.element[0]} </TableCell>
							                    <TableCell> {this.props.element[1]} </TableCell>
						                </TableRow>
					            </TableHead>
					            {/* time for some data */}
					            {prettyTableData}	
				        </Table>
			
		            </div>
		    )
	}
}

export default FetchData;
