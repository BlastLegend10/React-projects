import { useState,useReducer } from 'react'



function Button({number, func}){
    return(
        <button className='list-none col-span-1 rounded-2xl bg-blue-500  m-2 cursor-pointer' onClick={() => func(number)}>{number}</button>
    )
}

export default Button;