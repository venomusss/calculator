import React from 'react';

function Form(props) {
    return (
        <form className="form" onSubmit={props.addItem}>
            <input className='input' minLength='2' type='text' name='name' placeholder='Service name'/>
            <input className='input' minLength='2' type='text' name='price' placeholder='Price(USD / month)'/>
            <input className='input' minLength='1' type='date' name='date' placeholder='Payment every month on the'/>
            <button>Submit</button>
        </form>
    );
}

export default Form;