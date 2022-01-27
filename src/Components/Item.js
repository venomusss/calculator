import React from 'react';

function Item(props) {
    return (
        <div className='item'>
            <div className='dot'>
                <div className='dot-item'></div>
            </div>
            <p className='item-label'>{props.name}</p>
            <p className='item-label price'>{props.price}$</p>
            <p className='item-label'>{props.date}</p>
            <button className='delete' onClick={() => props.delete(props.id)}>X</button>
        </div>
    );
}

export default Item;