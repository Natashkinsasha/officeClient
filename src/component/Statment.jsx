import React from "react";
import {Well, Button, Row, Col} from 'react-bootstrap';


class Statement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={6} md={8} sm={12}>
                        <Well>
                            <Button bsStyle="success" bsSize="large" block>Отправить</Button>
                        </Well>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Statement;
