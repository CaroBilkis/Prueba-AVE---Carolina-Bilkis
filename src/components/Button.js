import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.function} className={props.svg == null ?'px-6 py-2 bg-white hover:bg-slate-100 w-full ' :'px-6 py-2 bg-white hover:bg-slate-100 w-full flex flex-row items-center justify-between gap-2'}>
 
  
    <span>
    {props.text}
    </span>
   
  {props.svg !==null ? 
    
   <div>
    
   {props.svg}
   
   </div>
    :''
  }
    
    </button>
  )
}

export default Button