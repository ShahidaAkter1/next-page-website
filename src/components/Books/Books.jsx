import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    // const [books, setBooks] = useState([])

    // useEffect( ()=>{
    //     fetch('https://api.itbook.store/1.0/new')
    //     .then(res => res.json())
    //     .then(data => setBooks(data))
    // } ,[])

    // uporer tar same..akta korlei hobe

    // const booksData = useLoaderData()
    // console.log(booksData);

    const {books} = useLoaderData()
    console.log(books);



    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 ">
                {
                    books.map(book => <Book
                        key={books.isbn13}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;