import React from "react";


class CleverPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        console.log("12345365646757")
        console.log(nextProps);

    }

    bsStyle = (status) => {
        switch (status) {
            case 200:
                return "alert alert-success";
            case 201:
                return "alert alert-success";
            default:
                return "alert alert-danger";
        }
    }

    render() {
        if (this.props.response != null) {
            return (
                <div className={this.bsStyle(this.props.response.status)} role="alert">
                    <button type="button" className="close" data-dismiss="alert"
                            aria-label="Close"><span aria-hidden="true">×</span></button>
                    <strong>{this.props.response.statusText}</strong>
                </div>
            );
        }
        return (<div></div>);
    }

}

export default CleverPanel;