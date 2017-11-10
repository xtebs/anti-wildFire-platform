import React from 'react'
import ReactDOM from 'react-dom';

import TheContainer from './TheContainer';
import Fonts from './Fonts';


export default class extends React.Component {

  componentDidMount () {
    Fonts();
  }

  render() {
    return (
      <div>
        <TheContainer/> 
      </div>
    )
  }
}