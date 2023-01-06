import React,{useEffect, useState} from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Search from './components/Search';
import './css/index.css'
import Header from './components/Header';



function Main() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [inputText, setInputText] = useState("");
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
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

     <div className='flex flex-col justify-center items-center     animation-300 '>
        <Header/>

  
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
