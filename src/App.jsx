import React from 'react'
import './App.css'
import { useState } from 'react';
const App = () => {

let [counter,setCounter]=useState(15);



//  let counter=15;

 const addValue=()=>{
 
  counter=counter+1;
  setCounter(counter);
 }

const removeValue=()=>{
  setCounter(counter-2);
}


  return (
    <>  
    <div>Chai aur react</div>
    <div>Counter Value: {counter}</div>
     <button 
      onClick={addValue}>Add value</button>
     <br/>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App