import React from "react"
import { Link } from "react-router";
import { connect } from "react-redux"

import { fetchBooks } from "../actions/booksActions"
import { fetchAuthors } from "../actions/authorsActions"

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import SiteNavigation from "../components/navigation/SiteNavigation";
import Preloader from "../components/preloader/Preloader";


@connect((store) => {
  return {
    fetchedBooks: store.books.fetched,
    fetchedAuthor: store.authors.fetched,
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    // just fake delay for preloader example
    setTimeout(()=>{
      this.props.dispatch(fetchAuthors())
      this.props.dispatch(fetchBooks())
    },300)
  }

  render() {

    const { fetchedBooks, fetchedAuthor } = this.props;

    if(!fetchedBooks && !fetchedAuthor)
      return <Preloader />

    return (
      <div>
        <Nav/>
        <SiteNavigation me={this.props}/>
        <div class="container theme-showcase">
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
