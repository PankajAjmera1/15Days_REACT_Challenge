import { useState } from 'react';
import './App.css'

function App() {

  const [counte,setCounte] =useState(1)
  // let counte =15
  const addValue =() =>{
    if(counte>=20){
      console.log('your can nnot');
    }

    else{
    // counte =counte+1
    setCounte(counte+1)

    //  setCounte (prevCounter => prevCounter + 1)
    //  setCounte (prevCounter => prevCounter + 1)
    //  setCounte (prevCounter => prevCounter + 1)
    //  setCounte (prevCounter => prevCounter + 1)
    console.log('value add',counte);}
  }
  const removeValue =() =>{
    // counte =counte+1
    if(counte>0){
    setCounte(counte-1)
    console.log('value add',counte);
    }else{
      console.log('sorry');
    }
  }
  return (
    <>
     <h1>Chai aur Counter</h1>
     <h2>Counter Value :{counte}</h2>

     <button onClick={addValue}>Add Value {counte} </button>
     <br />
     <button onClick={removeValue}>Remove value {counte} </button>
    </>
  )
}

export default App
