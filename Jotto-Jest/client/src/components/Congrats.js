import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    if (props.success) {
        return (
            <div className="congrats" data-test="component-congrats">
                <h5 data-test="congrats-message">Congrats you guessed the word!!</h5>
            </div>
        );
    } else {
        return (
            <div className="congrats" data-test="component-congrats"></div>
        );
    }
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;
