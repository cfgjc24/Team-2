import React from 'react';
import PropTypes from 'prop-types';
import '../Module_card.css';

function Student_module({ name }) {
    return (
        <div className="module-card">
            <h1 id="Class">{name}</h1>
        </div>
    );
}

Student_module.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Student_module;
