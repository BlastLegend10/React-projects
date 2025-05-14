import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [prevoperand, setprevoperand] = useState('');
  const [operator,setoperator] = useState('');
  const [currentinp,setcurrentinp] = useState('');
  

  function clear(){
      setprevoperand('');
      setoperator('');
      setcurrentinp('');
  }


  return (
    <>
     <div className='flex flex-col justify-around w-200 rounded-2xl'>
         <div className='bg-gray-400 text-right'> 
          <div className=''>{prevoperand} {operator}</div>
          <input  className=' w-full h-25 font-bold text-5xl text-right p-2' value ={currentinp} onChange = {(e) => {setcurrentinp(e.target.value)}}></input>
         </div>
          <div className='grid grid-cols-4 grid-rows-5 gap-4 bg-yellow-50 p-10 h-150 border-amber-700 w-full'>
              <button className='list-none col-span-2 rounded-2xl bg-blue-500  m-2' onClick={clear}>AC</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>DEL</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2' onClick={() => setoperator('/')}>/</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>1</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>2</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>3</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'onClick={() => setoperator('*')}>*</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>4</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>5</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>6</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'onClick={() => setoperator('+')}>+</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>7</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>8</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>9</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>-</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>.</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2'>0 </button>
              <button className = 'list-none rounded-2xl bg-blue-500 col-span-2' onClick={() => {eval(currentinp+ operator + prevoperand)}}>=</button>
          </div>

     </div> 
    </>
  )
}

export default App
