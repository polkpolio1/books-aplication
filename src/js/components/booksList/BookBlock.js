import React from "react";
import { Link } from "react-router";

const BooksBlock = (props) => {
  const {book, authors} = props;

  const authorsList = authors.map( author =>{
    if( book.author_id.includes(author.id) )
      return <Link key={author.id} to={"/authors/"+author.id}>{author.full_name}</Link>
  })

  return (
    <div class="col-md-3 books-list">
      <div class="visible-block">
        <Link class="img-wr" to={"/books/"+book.id}>
          <div class="align">
            <img src={book.photo_url[0]}/>
          </div>
        </Link>
        <Link class="book-title" to={"/books/"+book.id}>{book.name}</Link>
      </div>
      <div class="hover-block">
        <Link class="img-wr" to={"/books/"+book.id}>
          <div class="align">
            <img src={book.photo_url[0]}/>
          </div>
        </Link>
        <Link to={"/books/"+book.id}>{book.name}</Link>
        <h5>Author:</h5>
        {authorsList}
      </div>
    </div>
  );
}

export default BooksBlock;
