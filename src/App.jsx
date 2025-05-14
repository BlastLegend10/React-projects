import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Numbers.jsx'
function App() {
  const [prevoperand, setprevoperand] = useState('');
  const [operator,setoperator] = useState('');
  const [currentinp,setcurrentinp] = useState('');
  
  function clear(){
      setprevoperand('');
      setoperator('');
      setcurrentinp('');
  }
    function equal(){
      try {
      clear();
      console.log((prevoperand+operator + currentinp));
      setcurrentinp(eval(prevoperand+operator + currentinp));
      }
      catch(error){
        setcurrentinp("Error");
      }
      
    }
  function append (number){
    setcurrentinp(currentinp+number);
  }
  function del(){

    setcurrentinp(currentinp.replace(currentinp[currentinp.length-1],""));
  }
  function operation(op){
    console.log(currentinp);
    if(prevoperand != ''&& operator != '')setprevoperand((eval(prevoperand + operator + currentinp)));
    else setprevoperand(currentinp);
    setoperator(op);
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
              <button className='list-none col-span-2 rounded-2xl bg-blue-500  m-2 cursor-pointer' onClick={clear}>AC</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2 cursor-pointer'onClick={del}>DEL</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2 cursor-pointer' onClick={() => operation('/')}>/</button>
              <Button number = '1'  func ={(number) => append(number)}/>
              <Button number = '2'  func ={(number) => append(number)}/>
             <Button number = '3'  func ={(number) => append(number)}/>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2 cursor-pointer'onClick={() => operation('*')}>*</button>
              <Button number = '4'  func ={(number) => append(number)}/>
              <Button number = '5'  func ={(number) => append(number)}/>
             <Button number = '6'  func ={(number) => append(number)}/>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2 cursor-pointer'onClick={() => operation('+')}>+</button>
              <Button number = '7'  func ={(number) => append(number)}/>
              <Button number = '8'  func ={(number) => append(number)}/>
              <Button number = '9'  func ={(number) => append(number)}/>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2 cursor-pointer' onClick={() => operation('-')}>-</button>
              <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2 cursor-pointer'>.</button>
              <Button number = '0'  func ={(number) => append(number)}/>
              <button className = 'list-none rounded-2xl bg-blue-500 col-span-2 cursor-pointer' onClick={equal}>=</button>
          </div>

     </div> 
    </>
  )
}

export default App
