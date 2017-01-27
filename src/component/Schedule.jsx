import React from "react";
import ParameterPanel from '../component/ParameterPanel.jsx';
import TableSchedule from '../component/TableSchedule.jsx'
import {Form, Button} from 'react-bootstrap'

class Schedule extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <ParameterPanel parameters={this.props.parameters} onUpdate={this.props.onUpdate}/>
                <TableSchedule daySchedules={this.props.daySchedules}/>
                <Button bsStyle="info" bsSize="large" onClick={this.props.onSearch}>Serch</Button>
                <Button bsStyle="warning" bsSize="large" onClick={this.props.onDeleteAll}>Delete all</Button>
            </div>

        )
    }
}

export default Schedule;
