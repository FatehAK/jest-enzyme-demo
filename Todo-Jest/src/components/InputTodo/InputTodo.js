import React from 'react';
import { uniqueId } from 'lodash';
import './InputTodo.css';

class InputTodo extends React.Component {

    inputRef = React.createRef();

    handleClick() {
        const content = this.inputRef.current.value;
        if (content && content.length > 0) {
            const todoItem = {
                id: uniqueId('id_'),
                content: content
            };
            this.props.addItem(todoItem);
        }
        this.inputRef.current.value = '';
    }

    render() {
        return (
            <div className="input-todo" data-test="component-input-todo">
                    <input ref={this.inputRef} type="text" className=" input-box" data-test="input-box" placeholder="Enter Todo Item" />
                    <button className="add-button" data-test="add-button" onClick={() => this.handleClick()}><i className="fas fa-plus"></i></button>
            </div>
        );
    }
}

export default InputTodo;
