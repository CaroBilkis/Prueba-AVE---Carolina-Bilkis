import React,{useEffect, useState} from 'react';

import Search from './components/Search';
import './css/index.css'
import Header from './components/Header';



function Main() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [sort, setSort] = useState(false);
 

  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          
          setItems(result);
        
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }
    fetchData();
  }, [])
    
  function header () {
    return(
      <div className='flex flex-col justify-center items-center     animation-300 '>
            <Header/>
      </div>
    );
  }
  if (error) {
    return 
    <div className='flex items-center w-full px-10 lg:px-24 2xl:px-32'>
      <h2> Error: {error.message}</h2>
    </div>;
   
  } else if (!isLoaded) {
    return 
      <div className='flex items-center w-full px-10 lg:px-24 2xl:px-32'>
          <h2> Loading...</h2>
      </div>;
  } else {

    

    function sortLow() {
      const itemsASC = [...items].sort((a, b) =>
      a.price > b.price ? 1 : -1,
      );

      setItems(itemsASC);
    }

    function sortHigher() {
      const itemsDES = [...items].sort((a, b) =>
      a.price < b.price ? 1 : -1,
      );

      setItems(itemsDES);
    }

    function sortASC() {
      const itemsASC = [...items].sort((a, b) =>
      a.title > b.title ? 1 : -1,
      );

      setItems(itemsASC);
    }

    function sortDES() {
      const itemsDES = [...items].sort((a, b) =>
      a.title < b.title ? 1 : -1,
      );

      setItems(itemsDES);
    }


    const controlSort = () =>{
      setSort(!sort);
    }



    return (

     <div>
        {header()}
  
        <Search items={items}  controlSort={()=>controlSort()}
              sortASC={()=>sortASC()}
              sortDES={()=>sortDES()}
              sortLow={()=>sortLow()}
              sortHigher={()=>sortHigher()}
              sort={sort}/>
       
     </div>
    );
  }
}

export default Main;
