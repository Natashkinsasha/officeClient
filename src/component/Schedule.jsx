import React from "react";
import ParameterPanel from '../component/ParameterPanel.jsx';
import TableSchedule from '../component/TableSchedule.jsx'
import {Form, Button, Col} from 'react-bootstrap'

class Schedule extends React.Component {

    state = {
        isLoadingSearch: false
    }

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Col lg={6} md={6} sm={12}>
                    <ParameterPanel parameters={this.props.parameters} onUpdate={this.props.onUpdate}/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <TableSchedule bookingRequests={this.props.bookingRequests}/>
                </Col>
                <Button bsStyle="info" bsSize="large" disabled={this.state.isLoadingSearch} onClick={() => {
                    this.setState({isLoadingSearch: true});
                    this.props.onSearch();
                    this.setState({isLoadingSearch: false});
                }}>Search</Button>
                <Button bsStyle="warning" bsSize="large" onClick={this.props.onDeleteAll}>Delete all</Button>
            </div>

        )
    }
}

export default Schedule;
