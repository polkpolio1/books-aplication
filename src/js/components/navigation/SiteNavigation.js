import React from "react";
import { IndexLink, Link } from "react-router";

export default class SiteNavigation extends React.Component {

  render() {

    const containerStyle = {
      marginTop: "60px"
    };
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    const { routes, params } = this.props.me;
    let navArr = [];

    routes.map((route, index) => {
      if(index){
        let param = '';
        let path = route.path || '/';
        if( path.charAt(0) === ':'){
          param = route.path.substr(1);
        }
        if(params[param]){
          path = navArr[navArr.length-1].path + '/' + params[param];
        }
        navArr.push({
          name: params[param] || route.name,
          path: path
        })
      }
    })

    var navigation = navArr.map((val, index) => {
      if(navArr.length-1 == index)
        return (
          <li class="active" key={index}>{val.name}</li>
        )
      return (
        <li key={index}><Link to={val.path}>{val.name}</Link></li>
      )
    })
    return (
      <div class="site-navigation container" style={containerStyle} role="navigation">
        <div class="row">
          <div class="col-lg-12">
            <ol class="breadcrumb">
            {navigation}
            </ol>

          </div>
        </div>
      </div>
    );
  }
}
