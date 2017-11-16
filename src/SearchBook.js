import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import SearchBookResult from './SearchBookResult'
class SearchBook extends Component{

     state = {
          searchResult: [],
          query: ''
     }

     updateQuery = (event) => {
          let query = event.target.value.trim();
          this.setState({query});
          if (query){

               BooksAPI.search(query, 20).then((books)=>{



                    this.setState({searchResult: books});


               })

          }
     }

	render(){

		return (


               <div className="search-books">

                      <div className="search-books-bar">

                        <Link className="close-search" to="/">Close</Link>

                        <div className="search-books-input-wrapper">

                          <input
                              type="text"
                              placeholder="Search by title or author"
                              value={this.state.query}
                              onChange={this.updateQuery}
                          />

                        </div>

                      </div>

                      {this.state.searchResult.length > 0 && (<SearchBookResult searchResult={this.state.searchResult} books={this.props.books} onChangeBookshelf={this.props.onChangeBookshelf} />)}


               </div>


		)
	}

}

export default SearchBook