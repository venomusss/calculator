import React from 'react';
import Item from "./Item";

function ItemList(props) {
    return (
        <div className='list'>
            {props.list.map((item)=>(
                <Item
                    name={item.name}
                    price={item.price}
                    date={item.date}
                    id={item.id}
                    delete={props.delete}
                />
            ))}
        </div>
    );
}

export default ItemList;