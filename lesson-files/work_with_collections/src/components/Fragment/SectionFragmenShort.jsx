import React from 'react';

class SectionFragment extends React.Component {
    render() {
        const { header, body } = this.props;

        return (
            <>
                <h2>{header}</h2>
                <div>{body}</div>
            </>
        );
    }
}

export default SectionFragment;