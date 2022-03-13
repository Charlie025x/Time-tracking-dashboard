import React, { Component } from "react";
import iconEllipsis from "../images/icon-ellipsis.svg";

export default class Card extends Component {
  render() {
    const { cardData } = this.props;
    return (
      <div
        className={"card " + cardData.title.replace(/\s+/g, "-").toLowerCase()}
      >
        {console.log(cardData)}
        <h2>{cardData.title}</h2>
        <img src={iconEllipsis} alt="" />
        <p className="current-hours">{cardData.timeframes.weekly.current}</p>
        <p className="previous-hours">
          Last Week - {cardData.timeframes.weekly.previous}hrs
        </p>
      </div>
    );
  }
}
