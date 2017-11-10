import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import ListBook from './ListBook'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<ListBook />)} />
        <Route path='/search-book' render={()=>(<SearchBook />)} />
      </div>
    )
  }
}

export default BooksApp
