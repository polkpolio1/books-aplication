import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router";

@connect((store) => {
  return {
    books: store.books.books,
    authors: store.authors.authors,
  };
})
export default class Books extends React.Component {

  render() {
    const { books, authors } = this.props;
    const { bookId } = this.props.params;

	  const book = books.map(book => {
      if(book.id == bookId)
        return(
          <div class="row single-item" key={book.id}>
            <div class="col-md-3">
              { 
                book.photo_url.map((url, index) => {
                  return <img key={index} src={url}/>
                })
              }
            </div>
            <div class="col-md-9">
              <h1>{book.name}</h1>
              <h3>Authors:</h3>
              <ul>
              {
                book.author_id.map((id) => {
                  return authors.map((author) =>{
                    if(id == author.id){
                      return <li><Link to={"/authors/" + author.id} key={author.id}>{author.full_name}</Link></li>
                    } 
                  })
                })
              }
              </ul>
              <h3>Genre:</h3>
              <ul>
                <li><Link to={"/genres/" + book.genre}>{book.genre}</Link></li>
              </ul>
              <h3>Description:</h3>
              <div dangerouslySetInnerHTML={ {__html: book.description} } />
            </div>
          </div>
        )
    })

    return (
      <div>
        {book}
      </div>
    );
  }
}
