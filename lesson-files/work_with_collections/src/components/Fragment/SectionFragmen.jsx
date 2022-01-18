import React from 'react';

class SectionFragment extends React.Component {
    render() {
        const { header, body } = this.props;

        return (
            <React.Fragment>
                <h2>{header}</h2>
                <div>{body}</div>
            </React.Fragment>
        );
    }
}

export default SectionFragment;