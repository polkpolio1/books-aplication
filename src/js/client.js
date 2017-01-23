import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"

import Layout from "./pages/Layout"
import BooksList from "./pages/BooksList"
import AuthorsList from "./pages/AuthorsList"
import NotFound from "./pages/NotFound"
import Book from "./pages/Book"
import Author from "./pages/Author"
import Genres from "./pages/Genres"
import BooksListByGenre from "./components/genre/BooksListByGenre"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <Router history={hashHistory}>
  	<Route path="/" component={Layout}>
    	  <IndexRoute name="Books" component={BooksList}></IndexRoute>
    	  <Route name="Books" path="/books" component={BooksList}>
    	  	<Route name="Book" path=":bookId" component={Book}></Route>
    	  </Route>
    	  <Route name="Authors" path="/authors" component={AuthorsList}>
    	  	<Route name="Author" path=":authorId" component={Author}></Route>
    	  </Route>
    	  <Route name="Genres" path="/genres" component={Genres}>
    	  	<Route name="Genre" path=":genre" component={BooksListByGenre}></Route>
    	  </Route>
        <Route name="NotFound" path="*" component={NotFound} />
  	</Route>
  </Router>
</Provider>, app);
