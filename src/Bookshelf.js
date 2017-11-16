import React, {Component} from 'react'
import Book from './Book'


class Bookshelf extends Component{
	render(){


    let books = this.props.books.map((book)=>




      (<li key={book.id}><Book book={book} value={this.props.value} onChangeBookshelf={this.props.onChangeBookshelf}/></li>));

		return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books}
                    </ol>
                  </div>
                </div>
		)
	}
}

export default Bookshelf