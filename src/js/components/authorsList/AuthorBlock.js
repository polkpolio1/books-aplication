import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router";

@connect((store) => {
  return {
    authors: store.authors.authors,
    books: store.books.books,
  };
})
export default class AuthorBlock extends React.Component {
  render() {
    const { authors, books, author } = this.props;

    const booksList = books.map((book) => {
	  if(book.author_id.includes(author.id)){
	    return <li class="dropdown-item" key={book.id}><Link class="dropdown-item" to={"/books/" + book.id}>{book.name}</Link></li>
	  } 
	})

    return (
	  <div class="dropdown">
	    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
	      {author.full_name} <span class="caret"></span>
	    </button>
	    <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
	      <li class="dropdown-item"><Link class="dropdown-item" to={"/authors/"+author.id}>Go to author's page</Link></li>
	      <li role="separator" class="divider"></li>
	      <li class="dropdown-header">Books:</li>
	         {booksList}
	    </ul>
	  </div>
    );
  }
}
	