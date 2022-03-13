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
              <span>Jeremy Robson</span>
            </h1>
          </div>
          <div data-time-frame className="time-frame">
            <span
              onClick={(e) => {
                this.setState(
                  () => {
                    return { timeFrame: "daily" };
                  },
                  () => {
                    console.log(this.state);
                  }
                );
              }}
            >
              Daily
            </span>
            <span
              onClick={(e) => {
                this.setState(
                  () => {
                    return { timeFrame: "weekly" };
                  },
                  () => {
                    console.log(this.state);
                  }
                );
              }}
              className="active-time-frame"
            >
              Weekly
            </span>
            <span
              onClick={(e) => {
                this.setState(
                  () => {
                    return { timeFrame: "monthly" };
                  },
                  () => {
                    console.log(this.state);
                  }
                );
              }}
            >
              Monthly
            </span>
          </div>
        </div>
        {/* looping through cardsData and rendering cards */}
        {this.state.cardsData.map((cardData) => (
          <Card
            key={cardData.title}
            cardData={cardData}
            timeFrame={this.state.timeFrame}
          />
        ))}
        {/* ********************************************* */}
      </main>
    );
  }
}
