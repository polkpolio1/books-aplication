import { combineReducers } from "redux"

import books from "./booksReducer"
import authors from "./authorsReducer"
import menu from "./menuReducer"

export default combineReducers({
  books,
  authors,
  menu,
})
