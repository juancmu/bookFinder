import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "./Loader";
import coverImg from "../images/no_cover.jpg"
import "./BookID.css";
import { FaLessThan } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Maps } from "./Maps"



const BookID = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await response.json();
    

        if(data){
          const {description, title, covers} = data;
          const newBook = {
            description: description ? description.value : "No se encontro descripcion",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
      
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if(loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaLessThan size = {20} />
          <span className='fs-15 fw-8'>Regresar</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
           
            

            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
  
          
            <div className='book-details-item'>
              <span className='fw-6'>Libreria donde la Puedes Encontrar: </span>
              <span>{book?.subjects}</span>
            </div>
            <Maps />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookID