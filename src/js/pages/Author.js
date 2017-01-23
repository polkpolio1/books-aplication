import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router";

@connect((store) => {
  return {
    authors: store.authors.authors,
    books: store.books.books,
  };
})
export default class Athour extends React.Component {
  render() {
    const { authors, books } = this.props;
    const { authorId } = this.props.params;

	  const author = authors.map(author => {
      if(author.id == authorId)
        return(
          <div class="row single-item" key={author.id}>
            <div class="col-md-3">
              { 
                author.photo_url.map((url, index) => {
                  return <img key={index} src={url}/>
                })
              }
            </div>
            <div class="col-md-9">
              <h1>{author.full_name}</h1>
              <h3>Books:</h3>
              <ul>
              {
                books.map((book) => {
                  if(book.author_id.includes(author.id)){
                    return <li key={book.id}><Link to={"/books/" + book.id}>{book.name}</Link></li>
                  } 
                })
              }
              </ul>
              <h3>Biography:</h3>
              <div dangerouslySetInnerHTML={ {__html: author.biography} } />
            </div>
          </div>
        );
    })

    return (
      <div>
        {author}
      </div>
    );
  }
}
