import React from 'react';

function Form(props) {
    return (
        <form className="form">
            <input className='input' type='text' name='' placeholder='Service name'/>
            <input className='input' type='text' name='' placeholder='Price(USD / month)'/>
            <input className='input' type='text' name='' placeholder='Payment every month on the'/>
            <input className='input' type='color' name='' placeholder='Logo font color'/>
            <input className='input' type='color' name='' placeholder='Logo background color'/>
            <button>Submit</button>
        </form>
    );
}

export default Form;