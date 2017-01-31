import React from 'react';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import App from '../component/App.jsx'
class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <App>
                    {this.props.children}
                </App>
            </div>
        )
    }
}

export default AppContainer;
