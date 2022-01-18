import React from 'react';

class List extends React.Component {
    renderList() {
        const { data } = this.props

        return data.map(item => <li>{item.name}</li>);
    }

    render() {


        return (
            <ul>
               {this.renderList()}
            </ul>
        );
    }
}

export default List;