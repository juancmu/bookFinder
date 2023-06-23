import React from 'react'
import { Home } from './views/Home'


import './App.css';
import './bootstrap.min.css';
import data from './data.json'
import { Finder } from './components/Finder';
import { Stats } from './components/Stats';
import { Maps } from './components/Maps';
import { Navbar } from './components/Navbar';


console.log(data)

export const App = () => {
  return (
    <>
    <Navbar />

    <div className="container2">
   
        
        
        <Home />

        

    
      </div>
      </>
  )
}
