import React from 'react';
import {Navbar, Grid} from 'react-bootstrap';
class App extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        )
    }
}

export default App;