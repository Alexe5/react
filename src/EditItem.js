import React, { useState } from 'react';

function EditItem({ editItem, index }) {
    const [newValue, setNewValue] = useState("");

    const handleEditSubmit = e => {
        e.preventDefault();
        if (!newValue) return;
        editItem(newValue, index);
        setNewValue("");
    };

    return (
        <form onSubmit={handleEditSubmit} className="list__edit">
            <input
                type="text"
                value={newValue}
                onChange={e => setNewValue(e.target.value)}
            />
            <button type="submit">Edit</button>
        </form>
    );
}

export default EditItem;