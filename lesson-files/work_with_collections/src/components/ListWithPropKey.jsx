import React from 'react';

class List extends React.Component {
    render() {
        const { data } = this.props

        return (
            <ul>
                {data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        );
    }
}
export default List;