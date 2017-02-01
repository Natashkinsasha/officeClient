import React from "react";


class CleverPanel extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.response != null) {
            return (
                <div className="alert alert-success" role="alert">
                    <button type="button" className="close" onClick={this.props.onClose}
                            aria-label="Close"><span aria-hidden="true">×</span></button>
                    <strong>{this.props.response.statusText}</strong>
                </div>
            );
        }
        return (<div></div>);
    }

}

export default CleverPanel;