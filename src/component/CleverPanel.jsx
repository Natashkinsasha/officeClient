import React from "react";
import {Row, Col} from 'react-bootstrap'

class CleverPanel extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        if (this.props.response != null) {
            setTimeout(this.props.onClose, 3000)
            return (
                <div style={{position: 'fixed', bottom: '2%'}}>
                    <div className="alert alert-success" role="alert">
                        <button type="button" className="close" onClick={this.props.onClose}
                                aria-label="Close"><span aria-hidden="true">×</span></button>
                        <strong>{this.props.response.statusText}</strong>
                        All is good!!!
                    </div>
                </div>
            );
        }
        return (<div></div>);
    }

}

export default CleverPanel;