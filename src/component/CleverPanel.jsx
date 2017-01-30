import React from "react";


class CleverPanel extends React.Component {
    constructor(props) {
        super(props);
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
                    <button type="button" className="close" onClick={this.props.onClose}
                            aria-label="Close"><span aria-hidden="true">×</span></button>
                    <strong>{this.props.response.statusText}</strong>
                    {this.props.response.data.length != 0 ? <div><br/>{`${JSON.stringify(this.props.response.data)}`}</div> :
                        <div></div>}
                </div>
            );
        }
        return (<div></div>);
    }

}

export default CleverPanel;