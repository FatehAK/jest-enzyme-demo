import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

class TodoList extends React.Component {
    renderList() {
        const items = this.props.items;
        if (items && items.length > 0) {
            return (
                <div className="todo-list" data-test="component-todo-list">
                    {items.map((item) => (
                        <React.Fragment key={item.id}>
                            <TodoItem item={item} deleteItem={this.props.deleteItem} data-test="component-todo-item" />
                            <hr className="todo-item-seperator" />
                        </React.Fragment>
                    ))}
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <>
                {this.renderList()}
            </>
        );
    }
}

TodoList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired
};

export default TodoList;
