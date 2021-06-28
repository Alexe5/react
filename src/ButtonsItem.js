import React from 'react';

function ButtonsItem({ removeItem, index }) {
    return (
        <button
            onClick={() => removeItem(index)}
            className="list__remove"
        >
            Remove
        </button>
    );
}

export default ButtonsItem;