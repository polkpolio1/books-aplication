import React from "react";
import { connect } from "react-redux"

import BookBlock from "../booksList/BookBlock"

@connect((store) => {
  return {
    books: store.books.books,
    authors: store.authors.authors,
  };
})
export default class BooksListByGenre extends React.Component {

  render() {

    const { genre } = this.props.params;
    const { books, authors } = this.props;

    const booksList = books.map(book => {
      if( book.genre === genre )
        return(
          <BookBlock key={book.id} book={book} authors={authors} />
        )
    })

    return (
      <div class="row">{booksList}</div>
    );
  }
}
