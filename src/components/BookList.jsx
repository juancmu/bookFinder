import React from 'react';
import { useGlobalContext } from '../ApiLibrary';
import Book from "./Book";
import Loading from "./Loader";
import coverImg from "../images/no_cover.jpg";
import "./BookList.css";


const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksCover = books.map((book) => {
    console.log(book);
    console.log(book.cover_id);
    return {
      ...book,
      id: (book.id).replace("/works/", ""),
      cover_img: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : coverImg
     
    }
   
  });

  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksCover.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList