import React from 'react';

function Item(props) {
    return (
        <div className='item'>
            <div className='dot'></div>
            <p className='item-label'>{props.name}</p>
            <p className='item-label'>{props.price}</p>
            <p className='item-label'>{props.date}</p>
            <button onClick={() => props.delete(props.id)}>X</button>
        </div>
    );
}

export default Item;