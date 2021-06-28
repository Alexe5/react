import React, { useState, useEffect } from 'react';
import './List.css';
import ListItem from './ListItem';
import AddItem from './AddItem';
import EditItem from './EditItem';
import ButtonsItem from './ButtonsItem';

function List() {
    const [items, setItems] = useState([
        {
            text: 'Пекин'
        },
        {
            text: 'Дублин'
        },
        {
            text: 'Лондон'
        }
    ]);

    const addItem = text => {
        const newItems = [...items, { text }];
        setItems(newItems);
    };

    const removeItem = index => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const editItem = (newValue, index) => {
        const newItems = [...items];
        newItems[index].text = newValue;
        setItems(newItems);
    };

    useEffect(() => {
        let inputs = document.querySelectorAll('.list__edit input');
        for (let i = 0; i < inputs.length; i++ ) {
            inputs[i].value = '';
        }
    });

    return (
        <div className="list">
            {items.map((item, index) => (
                <div className="list__item" key={index}>
                    <ListItem
                        item={item}
                    />
                    <EditItem
                        editItem={editItem}
                        index={index}
                    />
                    <ButtonsItem
                        removeItem={removeItem}
                        index={index}
                    />
                </div>
            ))}
            <AddItem addItem={addItem} />
        </div>
    );
}

export default List;