import React, {Component} from 'react'
import Bookshelf from './Bookshelf'


class ListBooksContent extends Component{




	render(){


    let currentlyReading = this.props.books.filter((book)=>book.shelf === "currentlyReading");
    let wantToRead = this.props.books.filter((book)=>book.shelf === "wantToRead");
    let read = this.props.books.filter((book)=>book.shelf === "read");
		return (
			<div className="list-books-content">
              <div>
                {currentlyReading.length > 0 && (<Bookshelf shelfName="Currently Reading" books={currentlyReading} value="currentlyReading" onChangeBookshelf={this.props.onChangeBookshelf}/>)}
                {wantToRead.length > 0 && (<Bookshelf shelfName="Want to Read" books={wantToRead} value="wantToRead" onChangeBookshelf={this.props.onChangeBookshelf}/>)}
                {read.length > 0 && (<Bookshelf shelfName="Read" books={read} value="read" onChangeBookshelf={this.props.onChangeBookshelf}/>)}
              </div>
            </div>

		)
	}


}

export default ListBooksContent