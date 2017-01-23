export default function reducer(state={
    books: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {
    case "FETCH_BOOKS": {
      return {...state, fetching: true}
    }
    case "FETCH_BOOKS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_BOOKS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        books: action.payload,
      }
    }
  }

  return state
}
