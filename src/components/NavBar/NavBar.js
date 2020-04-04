import React, {Component} from "react";
import './NavBar.css';

export default class NavBar extends Component {

  render() {
    return (
        <div className='nav-bar'>
          <ul className='nav-bar-list'>
            <li className='nav-bar-item'>
              <a onClick={() => this.props.changePage('map')}
                 href="#">Map</a>
            </li>
            <li className='nav-bar-item'>

              <a onClick={() => this.props.changePage('profile')}
                 href="#">Profile</a>
            </li>
            <li className='nav-bar-item'>
              <a onClick={() => this.props.changePage('login')}
                 href="#">Log off</a>
            </li>
          </ul>
        </div>
    )
  };
}



