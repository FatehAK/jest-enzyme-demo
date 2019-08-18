import React from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../actions/index';

export class UnconnectedInput extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const guessedWord = this.inputRef.current.value;
        if (guessWord && guessWord.length > 0) {
            this.props.guessWord(guessedWord);
        }
        this.inputRef.current.value = '';
    }

    renderInput() {
        if (this.props.success) {
            return null;
        } else {
            return (
                <form>
                    <input ref={this.inputRef} type="text" data-test="input-box" placeholder="Enter word" />
                    <button onClick={(evt) => this.handleSubmit(evt)} type="submit" data-test="submit-button">Submit</button>
                </form>
            );
        }
    }

    render() {
        return (
            <div className="input" data-test="component-input">{this.renderInput()}</div>
        );
    }
}

const mapStateToProps = (state) => ({
    success: state.success
});

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
