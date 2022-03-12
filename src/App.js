import React, { Component } from 'react'
import Card from './components/card.comonent';

import userImg from './images/image-jeremy.png'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      timeFrame: "weekly",
      cards: [],
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  
  render() {
    return (
      <main data-cards-container>
        <div className="user-card">
          <div className="user-header">
            <img src={userImg} alt=""/>
            <h1>
              Report for
              <a>Jeremy Robson</a>
            </h1>
          </div>
          <div data-time-frame className="time-frame">
            <a>Daily</a>
            <a className="active-time-frame">Weekly</a>
            <a>Monthly</a>
          </div>
        </div>
      <Card/>
    </main>
    )
  }
}
