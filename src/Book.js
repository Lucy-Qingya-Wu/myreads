import React, {Component} from 'react'



class Book extends Component{

	render(){



	    let books = this.props.authors.map((author)=>

	      (<div className="book-authors" key={author}>{author}</div>)

	    );

		return (

	        <div className="book">
	          <div className="book-top">

	            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks})` }}></div>

	            <div className="book-shelf-changer">
	              <select>
	                <option value="none" disabled>Move to...</option>
	                <option value="currentlyReading">Currently Reading</option>
	                <option value="wantToRead">Want to Read</option>
	                <option value="read">Read</option>
	                <option value="none">None</option>
	              </select>
	            </div>

	          </div>
	          <div className="book-title">{this.props.title}</div>
	          {books}
	        </div>

		)
	}
}

export default Book