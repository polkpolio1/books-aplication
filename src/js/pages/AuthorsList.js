import React from "react";
import { connect } from "react-redux"

import AuthorBlock from "../components/authorsList/AuthorBlock"

@connect((store) => {
  return {
    authors: store.authors.authors,
  };
})
export default class AuthorsList extends React.Component {
  render() {
  	const { authors } = this.props;

  	const authorsList = authors.map(author => {
  		return <AuthorBlock key={author.id} author={author}/>
  	})

    if(this.props.children) return this.props.children

    return <div>
      <h1>Authors:</h1>
      <ul>{authorsList}</ul>
    </div>
  }
}
