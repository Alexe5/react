import React from 'react';

function ListItem({ item }) {
    return (
        <span className="list__text">
            {item.text}
        </span>
    );
};

export default ListItem;