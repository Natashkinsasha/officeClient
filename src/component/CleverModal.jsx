import React from "react";
import {Modal, Button} from "react-bootstrap";

class CleverModal extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.response != null) {
            return (
                <Modal show={this.props.response != null} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.response.statusText}</Modal.Title>
                    </Modal.Header>
                    {this.props.response.data.length != 0 ?
                        <div><br/>{`${JSON.stringify(this.props.response.data)}`}</div> :
                        <div></div>} <Modal.Footer>
                    <Button onClick={this.props.close} bsStyle="primary">Ок</Button>
                </Modal.Footer>
                </Modal>
            );
        }
        return (<div/>);

    }

}

export default CleverModal;