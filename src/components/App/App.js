import React, {Component} from "react";
import 'normalize.css'
import './App.css';
import PageMap from "../PageMap/PageMap";
import PageProfile from "../PageProfile/PageProfile";
import PageLogin from "../PageLogin/PageLogin";
import PageSignUp from "../PageSignUp/PageSignUp";

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
      case 'Sign Up':
        return <PageSignUp changePage={this.changePage}/>;
      case 'Come In':
        return <PageLogin changePage={this.changePage}/>;
      default:
        return page;
    }
  }
};

