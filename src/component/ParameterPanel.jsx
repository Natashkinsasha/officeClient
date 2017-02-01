import React from "react";
import {Well, Form, Col, FormGroup, ControlLabel} from 'react-bootstrap'
import TimePicker from 'react-bootstrap-time-picker'
import DatePicker from 'react-bootstrap-date-picker'
class ParameterPanel extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                    <Form horizontal>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={5}>
                                <ControlLabel>Start work time</ControlLabel>
                            </Col>
                            <Col lg={7}>
                                <TimePicker step={30} value={this.props.parameters.startWorkTime}
                                            onChange={(value) => {
                                                this.props.onUpdate({
                                                    startWorkTime: value,
                                                });
                                            }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={5}>
                                <ControlLabel>End work time</ControlLabel>
                            </Col>
                            <Col lg={7}>
                                <TimePicker step={30} value={this.props.parameters.finishWorkTime}
                                            onChange={(value) => {
                                                this.props.onUpdate({
                                                    finishWorkTime: value
                                                });
                                            }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={5}>
                                <ControlLabel>Start data</ControlLabel>
                            </Col>
                            <Col lg={7}>
                                <DatePicker value={this.props.parameters.startData}
                                            onChange={(value) => {
                                                this.props.onUpdate({
                                                    startData: value
                                                });
                                            }}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={5}>
                                <ControlLabel>End data</ControlLabel>
                            </Col>
                            <Col lg={7}>
                                <DatePicker value={this.props.parameters.finishData}
                                            onChange={(value) => {
                                                this.props.onUpdate({
                                                    finishData: value
                                                });
                                            }}/>
                            </Col>
                        </FormGroup>
                    </Form>

            </div>
        )
    }

}

export default ParameterPanel;