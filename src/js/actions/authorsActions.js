import axios from "axios";

export function fetchAuthors() {
  return function(dispatch) {
    axios.get('./js/data/authors.json')
      .then((response) => {
        dispatch({type: "FETCH_AUTHORS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_AUTHORS_REJECTED", payload: err})
    })
  }
}