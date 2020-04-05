import React, {Component} from "react";
import 'normalize.css'
import './App.css';
import PageMap from "../PageMap";
import PageProfile from "../PageProfile";
import PageLogin from "../PageLogin";
import PageSignUp from "../PageSignUp";

export default class App extends Component {

  state = {
    page: 'login'
  };

  changePage = (page) => {
    this.setState({page: page})
  };

  render() {

    const {page} = this.state;

    switch (page) {
      case 'map':
        return <PageMap changePage={this.changePage}/>;
      case 'profile':
        return <PageProfile changePage={this.changePage}/>;
      case 'login':
        return <PageLogin changePage={this.changePage}/>;
      case 'sign':
        return <PageSignUp changePage={this.changePage}/>;
      default:
        return page;
    }
  }
};

