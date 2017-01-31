import React from 'react';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import Navigation from '../component/Navigation.jsx'
class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        )
    }
}

export default App;