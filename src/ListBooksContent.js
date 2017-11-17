import React from 'react'
import Bookshelf from './Bookshelf'


const ListBooksContent = (props) => {




    // <ListBooksContent books={this.props.books} onChangeBookshelf={this.props.onChangeBookshelf}/>
    let {books, onChangeBookshelf} = props;

    let currentlyReading = books.filter((book)=>book.shelf === "currentlyReading");
    let wantToRead = books.filter((book)=>book.shelf === "wantToRead");
    let read = books.filter((book)=>book.shelf === "read");

		return (
			<div className="list-books-content">
              <div>
                {currentlyReading.length > 0 && (<Bookshelf shelfName="Currently Reading" books={currentlyReading} value="currentlyReading" onChangeBookshelf={onChangeBookshelf}/>)}
                {wantToRead.length > 0 && (<Bookshelf shelfName="Want to Read" books={wantToRead} value="wantToRead" onChangeBookshelf={onChangeBookshelf}/>)}
                {read.length > 0 && (<Bookshelf shelfName="Read" books={read} value="read" onChangeBookshelf={onChangeBookshelf}/>)}
              </div>
            </div>

		)



}

export default ListBooksContent