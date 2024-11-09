import React from "react";
import { useState } from 'react'




function Input({toAddFunction}) {
const [inputValue, setInputValue] = useState('');
const [submitValue, setSubmitValue] = useState('');

function handleChange(e){
    setInputValue(e.target.value);

}

function handleSubmit(event){
    event.preventDefault()

    if(inputValue.trim() === ""){
        return;
    }
    let newItem = {inputValue: inputValue, id: Date.now()};
   toAddFunction(newItem);
   setInputValue('');


};
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      value={inputValue} 
      onChange={handleChange} 
      placeholder="Add task..."
      />
  
    <button type="submit">Submit</button>
      {/* </input>
      <button>Submit
      </button>
      {inputValue} */}
      </form>
  );
}

export default Input;
