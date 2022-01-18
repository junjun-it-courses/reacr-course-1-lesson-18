import React from 'react';

class Section extends React.Component {
    render() {
        const { header, body } = this.props;

        return (
            <div>
                <h2>{header}</h2>
                <div>{body}</div>
            </div>
        );
    }
}

export default Section;