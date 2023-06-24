import React, {useRef, useEffect, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../ApiLibrary';
import "./Finder.css";
import { useCustomHook } from './useCustomHook';



const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();

  //custom hook
  const [txtParam, setTxtParam]= useCustomHook('txtParam', '')

  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const eventParamFind = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("Programacion");
      setResultTitle("Ingresar parametro de Busqueda");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form'>
            <div className='search-form-elem flex flex-sb '>
              <h3>Ingrese parametro de busqueda. Ejm: Programacion</h3>  
              <input type = "text" className='form-control' 
              onChange={e => setTxtParam(e.target.value)}
              value={txtParam}
              placeholder='Ingrese parametro de busqueda. Ejm: Programacion' 
              ref = {searchText} />
               
               
               <button type = "submit" className='flex flex-c' onClick={eventParamFind}>
                <FaSearch className='text-blue' size = {20} />
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm