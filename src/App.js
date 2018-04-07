import React from 'react';
import FetchData from './FetchData.js';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TextFieldExample from './TextFieldExample.js';

var styles = {
	"appBarStyle": {
		"marginBottom": "10px",
	}
}

class App extends React.Component {
  // One thing every component must do: 
  // define the render method
  // (this defines the view of the component)
  render() {
    return (
      <div>
	    <AppBar position="static" style={styles.appBarStyle}>
			<Toolbar>
				<Typography variant="title" color="inherit">
					Heart Rate Data	
				</Typography>
			</Toolbar>
		</AppBar>
		<FetchData element={["Times", "heart rate(BPM)"]} />
		<TextFieldExample />
      </div>
    );
  }
}

export default App;
