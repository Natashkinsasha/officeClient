import React from "react";
import {Modal, Button} from "react-bootstrap";

class ConfirmModal extends React.Component {
    constructor(props) {
        super(props);
    }


    onClose = () => {
        return this.props.onClose();
    }

    onOk = () => {
        return this.props.onOk();
    }

    onCancel = () => {
        return this.props.onCancel();
    }


    render() {
        return (

            <Modal show={this.props.show} onHide={this.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.onCancel}>Отмена</Button>
                    <Button onClick={this.onOk} bsStyle="primary">Ок</Button>
                </Modal.Footer>
            </Modal>
        );

    }

}

export default ConfirmModal;