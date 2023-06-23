import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import './index.css';
import Home from './views/Home';
import About from "./views/About";

import BookList from "./components/BookList";
import BookID from "./components/BookID";
import { ApiLibrary } from './ApiLibrary';
import { V404 } from './components/v404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ApiLibrary >
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
     
          <Route path = "Info" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookID />} />
          <Route path = "*" element = {<V404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ApiLibrary>

);

