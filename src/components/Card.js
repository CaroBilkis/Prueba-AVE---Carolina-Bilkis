import React, {useState, useEffect} from 'react'

const Card = (props) => {

  const [like, setLike] = useState(props.like);


  useEffect(() => {
    localStorage.setItem('like', JSON.stringify(like));
    console.log(localStorage.getItem("like"));
  }, [like]);


  const controlLike = () => {
    setLike(!like);
  }
  var title = "";

  return (
    <li  key={props.id} className="flex flex-col aspect-[1/1] justify-between items-center h-full flex-shrink-0 gap-4 pt-10 pb-5 px-4 drop-shadow-xl overflow-hidden rounded-3xl bg-slate-50 hover:drop-shadow-2xl group ">
  
      <div className='h-3/4 p-4 self-center aspect-auto mix-blend-multiply   '>
         <img className='bg-no-repeat bg-cover bg-center bg-fixed w-full h-full group-hover:scale-105  animation-300   ' src={props.image} alt="" />
      </div>

      {console.log(props.title.length )}
        
      <div className='pb-8 w-full flex flex-row justify-between gap-4 '>
        {props.title.length < 30 ? 
          <h2>{props.title}</h2>
          : 
          
        <h2> {
         props.title.substring(0, 29) + "..." } </h2>
        }
        <h3>${props.price} </h3>
        
      </div>

       <button className='absolute right-6 top-6 group' onClick={()=>controlLike()}>
            
            <svg className={like ? 'text-red-500 scale-110 animation-300 w-8 h-8' : 'opacity-30 text-gray-400 scale-100 animation-300  w-8 h-8 group-hover:opacity-80 group-hover:text-red-400'} width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
            </svg>

        </button>

        {props.price < 25  ?
            <div className='px-2 py-1 font-bold bg-yellow-300 absolute left-6 top-6 z-50'>Ofert</div>
            :
            props.rating > 4.3 ? 
            <div className='px-2 py-1 font-bold bg-green-500 absolute left-6 top-6 z-50'>Popular</div>
             :''    
            
        }

       
     </li>
     
  )
}

export default Card