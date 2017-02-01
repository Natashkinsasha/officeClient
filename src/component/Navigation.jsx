import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link, browserHistory} from 'react-router'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Office</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} onClick={() => {
                            browserHistory.push("/schedule")
                        }}>Schedule</NavItem>
                    </Nav>
                </Navbar>
            </div>);
    }
}

export default Navigation;