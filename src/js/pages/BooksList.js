import React from "react";
import { connect } from "react-redux"

import BookBlock from "../components/booksList/BookBlock"

@connect((store) => {
  return {
    books: store.books.books,
    authors: store.authors.authors,
  };
})
export default class BooksList extends React.Component {
  render() {
    const { books, authors } = this.props;

  	const booksList = books.map(book => {
  		return <BookBlock key={book.id} book={book} authors={authors}/>
  	})

    if(this.props.children) return this.props.children

    return <div>
      <h1>Books:</h1>
      <div class="row">{booksList}</div>
    </div>
  }
}
