import React, {Component} from "react";
import './Subtitle.css';

export default class Subtitle extends Component {

  onChangeForm = (subtitleName) => {
    subtitleName === 'Sign Up' ?
        this.props.changePage('Sign Up') :
        this.props.changePage('Come In')
  };

  render() {
    const {subtitle, subtitleLink} = this.props;

    return (
        <div className='subtitle-block'>
          <h5 className='subtitle'>{subtitle}</h5>
          <h5 onClick={() => this.onChangeForm(subtitleLink)}
              className='subtitle-link'>{subtitleLink}</h5>
        </div>

    )

  }

};

