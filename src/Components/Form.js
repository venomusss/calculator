import React from 'react';

function Form(props) {
    return (
        <form className="form" onSubmit={props.addItem}>
            <input className='input' minLength='1' type='number' name='income' placeholder='Enter your income'/>
            <input className='input' minLength='1' type='text' name='name' placeholder='Purchase name'/>
            <input className='input' minLength='1' type='number' name='price' placeholder='Price'/>
            <input className='input' minLength='1' type='date' name='date' placeholder='Payment every month on the'/>
            <button className='button'>Submit</button>
        </form>
    );
}

export default Form;