import React, { Component } from "react";
import Card from "./components/card.component";

import userImg from "./images/image-jeremy.png";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      timeFrame: "weekly",
      cardsData: [],
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          () => {
            return { cardsData: data };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <main data-cards-container>
        <div className="user-card">
          <div className="user-header">
            <img src={userImg} alt="" />
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
        {/* looping through cardsData and rendering cards */}
        {this.state.cardsData.map((cardData) => (
          <Card key={cardData.title} cardData={cardData} />
        ))}
        {/* ********************************************* */}
      </main>
    );
  }
}
