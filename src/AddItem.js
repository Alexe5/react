import React, { useState } from 'react';

function AddItem({ addItem }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addItem(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="list__add">
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddItem;