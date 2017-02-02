import React from "react";
import ParameterPanel from '../component/ParameterPanel.jsx';
import TableSchedule from '../component/TableSchedule.jsx'
import {Form, Button, Col, Row, Well} from 'react-bootstrap'
import ConfirmModal from '../component/ConfirmModal.jsx'

class Schedule extends React.Component {

    state = {
        isLoadingSearch: false,
        showModal: false
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
                                        this.props.onSearch().then(() => {
                                            this.setState({isLoadingSearch: false});
                                        }).catch(() => {
                                            this.setState({isLoadingSearch: false});
                                        })

                                    }}>Search</Button>
                            <Button bsStyle="warning" bsSize="large" disabled={this.state.isLoadingSearch} block
                                    onClick={() => {
                                        this.setState({showModal: true, isLoadingSearch: true})
                                    }}>Delete
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
                <ConfirmModal show={this.state.showModal} onOk={() => {
                    this.props.onDeleteAll().then(() => {
                        this.setState({isLoadingSearch: false, showModal: false});
                    }).catch(() => {
                        this.setState({isLoadingSearch: false, showModal: false});
                    })
                }} onCancel={()=>{
                    this.setState({isLoadingSearch: false, showModal: false});
                }} onClose={()=>{
                    this.setState({isLoadingSearch: false, showModal: false});
                }}/>
            </div>

        )
    }
}

export default Schedule;
