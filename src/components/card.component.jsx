import React, { Component } from "react";
import iconEllipsis from "../images/icon-ellipsis.svg";

export default class Card extends Component {
  render() {
    // importing card data from data.json and timeframe state
    const { cardData, timeFrame } = this.props;
    return (
      <div
        className={"card " + cardData.title.replace(/\s+/g, "-").toLowerCase()}
      >
        <h2>{cardData.title}</h2>
        <img src={iconEllipsis} alt="" />
        <p className="current-hours">
          {timeFrame === "daily"
            ? cardData.timeframes.daily.current
            : timeFrame === "weekly"
            ? cardData.timeframes.weekly.current
            : timeFrame === "monthly"
            ? cardData.timeframes.monthly.current
            : "unKnown timeframe error"}
          hrs
        </p>
        <p className="previous-hours">
          {timeFrame === "daily"
            ? "Yesterday - " + cardData.timeframes.daily.previous
            : timeFrame === "weekly"
            ? "Last Week - " + cardData.timeframes.weekly.previous
            : timeFrame === "monthly"
            ? "Last Month - " + cardData.timeframes.weekly.previous
            : ""}{" "}
          hrs
        </p>
      </div>
    );
  }
}
