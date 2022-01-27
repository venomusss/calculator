import React, {useEffect, useState} from 'react';

function Info(props) {
    return (
        <div className='info'>
            <p className='top-label'>your spending:</p>
            <p className='spend'>{props.spend}$</p>
            <p className='top-label top'>you spent</p>
            {props.percentages ? (
                    <p className='persentages'>{props.percentages.toFixed(1)}%</p>
                ) :
                (
                    <p>Enter your income or spending</p>
                )}
            <p className='lower-label'>of your earnings</p>
        </div>
    );
}

export default Info;