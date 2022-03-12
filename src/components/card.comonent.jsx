import React, { Component } from 'react'
import iconEllipsis from '../images/icon-ellipsis.svg'

export default class Card extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="card work">
        <h2>Work</h2>
        <img src={iconEllipsis} alt=""/>
        <p className="current-hours">
        32hrs
        </p>
        <p className="previous-hours">
        Previous - 36hrs
        </p>
      </div>
    )
  }
}
