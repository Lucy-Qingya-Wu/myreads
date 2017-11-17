import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import ListBook from './ListBook'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      books: []

    };
  }


  componentDidMount(){


    BooksAPI.getAll().then((books)=>{

      this.setState({books})

  	})

    console.log(this.state.books)


  }

  handleChangeBookshelf = (book, shelf) => {
    console.log(this.state.books)
    console.log(book.shelf, shelf)
    BooksAPI.update(book, shelf).then(()=>{
    if (book.shelf !== shelf){

      if (shelf === "neverRead"){

        console.log("shelf is neverRead")
        this.setState({books:this.state.books.filter((b)=>b.id !== book.id)})

      }
      else{
        let result = this.state.books.findIndex((b)=>b.id===book.id);
  // console.log('result:--', result)
        if (result !== -1){



          this.setState(state=>{
  // console.log('state=====', state)
  // console.log('state[result] =====', state.books[result])
            state.books[result].shelf = shelf;
            return state;

          })


        }else{
          this.setState(state=>{
            book.shelf = shelf;
            state.books.push(book);
            return state;
          })
        }
      }




    }})

  }




  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<ListBook books={this.state.books} onChangeBookshelf={this.handleChangeBookshelf}/>)} />
        <Route path='/search-book' render={()=>(<SearchBook books={this.state.books} onChangeBookshelf={this.handleChangeBookshelf}/>)} />
      </div>
    )
  }
}

export default BooksApp
