import React from 'react'

const Book = (props) => {

	// <Book book={book} value={this.props.value} onChangeBookshelf={this.props.onChangeBookshelf}/>



  let {book, value, onChangeBookshelf} = props


  return (


    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
        	width: 128,
        	height:193,
        	backgroundImage: `url("${book.imageLinks
        		? book.imageLinks.thumbnail
        		: "http://dummyimage.com/128x193/292929/e3e3e3&text=No Cover Available"}")`
        }}>
        </div>

        <div className="book-shelf-changer">
          <select value={value} onChange={(e)=>onChangeBookshelf(book, e.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="neverRead">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && book.authors.map(author=>
      	<div key={author} className="book-authors">{author}</div>
      )}
    </div>

  )



}
export default Book