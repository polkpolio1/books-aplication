import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from "react-redux"

import { toggleMenu } from "../../actions/menuActions"

@connect((store) => {
  return {
    collapsed: store.menu.collapsed
  };
})
export default class Nav extends React.Component {

  toggleCollapse() {
    this.props.dispatch(toggleMenu())
  }

  render() {
    const { collapsed } = this.props;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <IndexLink activeClassName="active" to="/" onClick={this.toggleCollapse.bind(this)}>Books</IndexLink>
              </li>
              <li>
                <Link activeClassName="active" to="/authors" onClick={this.toggleCollapse.bind(this)}>Authors</Link>
              </li>
              <li>
                <Link activeClassName="active" to="/genres" onClick={this.toggleCollapse.bind(this)}>Genre</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
