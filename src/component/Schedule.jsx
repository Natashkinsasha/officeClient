import React from "react";
import ParameterPanel from '../component/ParameterPanel.jsx';
import TableSchedule from '../component/TableSchedule.jsx'
import {Form, Button, Col, Row, Well} from 'react-bootstrap'

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
                <Row>

                    <Col lg={3} md={3} sm={12}>
                        <Well>
                            <ParameterPanel parameters={this.props.parameters} onUpdate={this.props.onUpdate}/>
                            <Button bsStyle="primary" bsSize="large" block disabled={this.state.isLoadingSearch}
                                    onClick={() => {
                                        this.setState({isLoadingSearch: true});
                                        this.props.onSearch();
                                        this.setState({isLoadingSearch: false});
                                    }}>Search</Button>
                            <Button bsStyle="warning" bsSize="large" block onClick={this.props.onDeleteAll}>Delete
                                all</Button>
                        </Well>
                    </Col>

                    <Col lg={9} md={9} sm={12}>
                        <TableSchedule bookingRequests={this.props.bookingRequests}
                                       onPageChange={this.props.onPageChange}
                                       onSizePerPageList={this.props.onSizePerPageList}
                                       onSortChange={this.props.onSortChange}
                        />
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Schedule;
