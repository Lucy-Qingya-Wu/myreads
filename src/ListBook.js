import React, {Component} from 'react'
import ListBooksTitle from './ListBooksTitle'
import ListBooksContent from './ListBooksContent'
import {Link} from 'react-router-dom'

class ListBook extends Component{
	render(){
		return (
      <div className="list-books">

        <ListBooksTitle />
        <ListBooksContent books={this.props.books} onChangeBookshelf={this.props.onChangeBookshelf}/>

        <Link className="open-search" to="/search-book"></Link>

      </div>
		)
	}
}

export default ListBook