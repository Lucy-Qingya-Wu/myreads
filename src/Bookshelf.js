import React from 'react'
import Book from './Book'

// <Bookshelf shelfName="Read" books={read} value="read" onChangeBookshelf={onChangeBookshelf}/>)}

const Bookshelf = (props) =>{


    let {shelfName, books, value, onChangeBookshelf} = props;
    let bookComponents = books.map((book)=>




      (<li key={book.id}><Book book={book} value={value} onChangeBookshelf={onChangeBookshelf}/></li>));

		return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {bookComponents}
                    </ol>
                  </div>
                </div>
		)

}

export default Bookshelf