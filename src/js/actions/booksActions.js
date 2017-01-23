import axios from "axios";

export function fetchBooks() {
  return function(dispatch) {
    axios.get('./js/data/books.json')
      .then((response) => {
        dispatch({type: "FETCH_BOOKS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_BOOKS_REJECTED", payload: err})
    })
  }
}