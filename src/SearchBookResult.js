import React from 'react'
import Book from './Book'
const SearchBookResult = (props) => {




// (<SearchBookResult
//      searchResult={this.state.searchResult}
//      books={this.props.books}
//      onChangeBookshelf={this.props.onChangeBookshelf}
// />)

// <Book book={book} value={this.props.value} onChangeBookshelf={this.props.onChangeBookshelf}/>
    console.log("===============================")
    console.log(props.books)
	let updatedSearchResults = props.searchResult.map((searchResultBook)=>{


		let matching = props.books.findIndex((book)=>book.id === searchResultBook.id);
// console.log(props.books, '\n\n')
        // console.log(props.books[matching].title, "matching is >>>>>>>",matching)

		if (matching !== -1){
			console.log(props.books[matching].title, "matching is >>>>>>>",matching)
			searchResultBook.shelf = props.books[matching].shelf;
		}else{
			console.log(searchResultBook.title, "matching is ~~~~~~~~~~",matching)
			searchResultBook.shelf = "neverRead";
		}

		return searchResultBook

	})



    let books = updatedSearchResults.map((book) => (
    	<li key={book.id}>
			<Book book={book} value={book.shelf} onChangeBookshelf={props.onChangeBookshelf}/>
	 	</li>)
    )


	return (
      <div className="search-books-results">
        <ol className="books-grid">{books}</ol>
      </div>
	)

}

export default SearchBookResult