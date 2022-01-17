import React from "react";

class Alert extends React.Component {
    render() {
        return <div
            className="alert"
            {...this.props}
        >
            <b><u>This is alert component</u></b>
        </div>;
    }
}

export default Alert;