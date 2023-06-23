import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const AppContext = React.createContext();

const ApiLibrary = ({children}) => {
    const [searchParam, setSearchParam] = useState("Programacion");
    const [books, setBooks] = useState([]);
    const [numBooks, setNumBooks] = useState(10);
    const [loading, setLoading] = useState(true);
    const [findByParam, setFindByParam] = useState("");


    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`http://openlibrary.org/search.json?title=${searchParam}`);
            const data = await response.json();
            const {docs} = data;
            console.log(data);
            
            if(docs){
                const newBooks = docs.slice(0, numBooks).map((bookSingle) => {
                    const {key, author_name, cover_i, first_publish_year, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setFindByParam(`Se encontraron los siguientes libros de "${searchParam}"`);
                } else {
                    setFindByParam("No se encontraron coincidencias")
                }
            } else {
                setBooks([]);
                setFindByParam("No se encontraron coincidencias");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchParam]);

    useEffect(() => {
        fetchBooks();
    }, [searchParam, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm: setSearchParam, resultTitle: findByParam, setResultTitle: setFindByParam,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, ApiLibrary};