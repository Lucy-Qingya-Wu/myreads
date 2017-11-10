import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './utils/BooksAPI'

class ListBooksContent extends Component{
	state = {
        currentlyReading: [],
        wantToRead: [],
        read: []


	}

  componentDidMount(){

    BooksAPI.getAll().then((books)=>{



      this.setState(()=>(

      {
        currentlyReading: this.state.currentlyReading.concat(
          books.filter((book)=>book.shelf === "currentlyReading").map((book)=>({id: book.id, title:book.title, authors:book.authors, imageLinks:book.imageLinks.smallThumbnail}))
        ),
        wantToRead: this.state.wantToRead.concat(
          books.filter((book)=>book.shelf === "wantToRead").map((book)=>({id: book.id, title:book.title, authors:book.authors, imageLinks:book.imageLinks.smallThumbnail}))
        ),
        read: this.state.read.concat(
          books.filter((book)=>book.shelf === "read").map((book)=>({id: book.id, title:book.title, authors:book.authors, imageLinks:book.imageLinks.smallThumbnail}))
        ),
      }

      ))


    })



  }

	render(){
		return (
			<div className="list-books-content">
              <div>
                {this.state.currentlyReading.length > 0 && (<Bookshelf shelfName="Currently Reading" books={this.state.currentlyReading} />)}
                {this.state.wantToRead.length > 0 && (<Bookshelf shelfName="Want to Read" books={this.state.wantToRead} />)}
                {this.state.read.length > 0 && (<Bookshelf shelfName="Read" books={this.state.read} />)}
              </div>
            </div>

		)
	}


}

export default ListBooksContent