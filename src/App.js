
import './App.css';
import React from 'react';
import {useState} from 'react';
function App() {
   const [input,setInput]=useState('');
  return (
    <div className='container'>
       <div className='secreen'><h2>{input}</h2></div>
       <div className='AC' onClick={()=>setInput('')}><button className='btn btn-danger btn-block'>AC</button></div>
       <div className='divide' onClick={()=>setInput(input+'/')}><button className='btn btn-primary'>/</button></div>
       <div className='fois' onClick={()=>setInput(input+'*')}><button className='btn btn-primary btn-block'>*</button></div>
       <div className='seven' onClick={()=>setInput(input+'7')}><button className='btn btn-primary btn-block'>7</button></div>
       <div className='eight' onClick={()=>setInput(input+'8')}><button className='btn btn-primary btn-block'>8</button></div>
       <div className='nine' onClick={()=>setInput(input+'9')}><button className='btn btn-primary btn-block'>9</button></div>
       <div className='sub' onClick={()=>setInput(input+'-')}><button className='btn btn-primary btn-block'>-</button></div>
       <div className='four' onClick={()=>setInput(input+'4')}><button className='btn btn-primary btn-block'>4</button></div>
       <div className='five' onClick={()=>setInput(input+'5')}><button className='btn btn-primary btn-block'>5</button></div>
       <div className='six' onClick={()=>setInput(input+'6')}><button className='btn btn-primary btn-block'>6</button></div>
       <div className='add' onClick={()=>setInput(input+'+')}><button className='btn btn-primary btn-block'>+</button></div>
       <div className='one' onClick={()=>setInput(input+'1')}><button className='btn btn-primary btn-block'>1</button></div>
       <div className='two' onClick={()=>setInput(input+'2')}><button className='btn btn-primary btn-block'>2</button></div>
       <div className='three' onClick={()=>setInput(input+'3')}><button className='btn btn-primary btn-block'>3</button></div>
       <div className='equal' onClick={()=>{try {setInput(input+'='+eval(input))} catch(error){alert(error); setInput('')}}}><button className='btn btn-danger btn-block fix'>=</button></div>
       <div className='zero' onClick={()=>setInput(input+'0')}><button className='btn btn-primary btn-block'>0</button></div>
       <div className='point' onClick={()=>setInput(input+'.')}><button className='btn btn-primary btn-block'>.</button></div>
      </div>
  );
}

export default App;
