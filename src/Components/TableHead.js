import React from 'react';

function TableHead(props) {
    return (
        <div className='table-head'>
            <p className='serv'></p>
            <p className='head-lable'>cost</p>
            <p className='head-lable'>amount</p>
            <p className='head-lable'>date</p>
        </div>
    );
}

export default TableHead;