import React, {Component} from 'react'



class Book extends Component{

	// <Book book={book} value={this.props.value} onChangeBookshelf={this.props.onChangeBookshelf}/>

	handleChange = (event) =>{


    // console.log(event.target.value)
		this.props.onChangeBookshelf(this.props.book, event.target.value)

	}

	render(){


         return (


                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{
                            	width: 128,
                            	height:193,
                            	backgroundImage: `url("${this.props.book.imageLinks
                            		? this.props.book.imageLinks.thumbnail
                            		: "http://dummyimage.com/128x193/292929/e3e3e3&text=No Cover Available"}")`
                            }}>
                            </div>

                            <div className="book-shelf-changer">
                              <select value={this.props.value} onChange={this.handleChange}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="neverRead">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          {this.props.book.authors && this.props.book.authors.map(author=>
                          	<div key={author} className="book-authors">{author}</div>
                          )}
                        </div>

         )


	 }
}
export default Book