export default function reducer(state={
    authors: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  switch (action.type) {
    case "FETCH_AUTHORS": {
      return {...state, fetching: true}
    }
    case "FETCH_AUTHORS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_AUTHORS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        authors: action.payload,
      }
    }
  }

  return state
}