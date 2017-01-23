import React from "react";
import { connect } from "react-redux"
import { Router, hashHistory  } from "react-router";


@connect((store) => {
  return {
    books: store.books.books,
  };
})

export default class Genres extends React.Component {

  handleChange(event) {
    const value = this.selectValue.value
    const transitionTo = Router.transitionTo;
    value ? hashHistory.push('/genres/' + value) : hashHistory.push('/genres/')
  }

  render() {

    const { books } = this.props;
    const { genre } = this.props.params;

    let genreArray = [];

  	books.map(book => {
      if(!genreArray.includes(book.genre))
        genreArray.push(book.genre)
  	})

    const optionList =  genreArray.map((genre, index) => {
      return <option key={index} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>
    })

    return (
      <div>
        <h1>Choose Genre:</h1>

        <div class="form-group">
          <select defaultValue={genre} class="form-control" ref={(select) => { this.selectValue = select; }} onChange={this.handleChange.bind(this)}>
            <option value="">Choose from the list</option>
            {optionList}
          </select>
        </div>

        {this.props.children}

      </div>
    );
  }
}
