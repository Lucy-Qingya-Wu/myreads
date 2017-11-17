import React from 'react'
import ListBooksTitle from './ListBooksTitle'
import ListBooksContent from './ListBooksContent'
import {Link} from 'react-router-dom'

// <ListBook books={this.state.books} onChangeBookshelf={this.handleChangeBookshelf}/>

const ListBook = (props) => {

	let {books, onChangeBookshelf} = props

	return (
      <div className="list-books">

        <ListBooksTitle />
        <ListBooksContent books={books} onChangeBookshelf={onChangeBookshelf}/>

        <Link className="open-search" to="/search-book"></Link>

      </div>
	)

}

export default ListBook