import React, { useState } from 'react';
import Grid from '../Grid';
import Button from './Button';

function Search( props ) {

  const [searchField, setSearchField] = useState("");

  const filteredItems = props.items.filter(
    item => {
      return (
        item
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      
        <Grid items={filteredItems} />
    
    );
  }

  return (
    <div className="flex flex-col gap-4  w-full px-10 lg:px-24 2xl:px-32">
      <div className='flex flex-row justify-between gap-4'>
      <input 
          className=" px-4 py-2 bg-transparent text-black w-4/5  border-b-2  border-b-teal-200 focus:border-b-orange-400 focus:outline-none"
          type = "search" 
          placeholder = "Search by name.." 
          onChange = {handleChange}
        />

        <div className='relative '>
            <div className='relative z-50 font-semibold w-40 '>
            <Button function={props.controlSort} text={"Sort by"} 
            
            svg={
            <svg className={props.sort ?'rotate-180 animation-300' : 'rotate-0  animation-300'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14.975C11.8667 14.975 11.7377 14.95 11.613 14.9C11.4877 14.85 11.3833 14.7834 11.3 14.7L6.69999 10.1C6.51665 9.91672 6.42499 9.68338 6.42499 9.40005C6.42499 9.11671 6.51665 8.88338 6.69999 8.70005C6.88332 8.51672 7.11665 8.42505 7.39999 8.42505C7.68332 8.42505 7.91665 8.51672 8.09999 8.70005L12 12.6L15.9 8.70005C16.0833 8.51672 16.3167 8.42505 16.6 8.42505C16.8833 8.42505 17.1167 8.51672 17.3 8.70005C17.4833 8.88338 17.575 9.11671 17.575 9.40005C17.575 9.68338 17.4833 9.91672 17.3 10.1L12.7 14.7C12.6 14.8 12.4917 14.8707 12.375 14.912C12.2583 14.954 12.1333 14.975 12 14.975V14.975Z" fill="currentcolor"/>
            </svg>
            }

            />

            </div>

            <div className={props.sort ? 'flex flex-col  absolute w-full opacity-100 top-10 z-50 translate-y-0 animation-300 shadow-xl' : 'flex flex-col w-full  absolute top-0 opacity-0 -translate-y-2 -z-10 animation-300'}>  
            <Button function={props.sortASC} text={"A-Z"} svg={null}/>
            <Button function={props.sortDES} text={"Z-A"} svg={null}/>


            <Button function={props.sortLow} text={"Lower price"} svg={null}/>
            <Button function={props.sortHigher} text={"Higher price"} svg={null}/>
            </div>
        </div>
      </div>

  
      
      {searchList()}
    </div>
  );
}

export default Search;
