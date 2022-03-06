const cardContainer = document.querySelector("[data-cards-container]")
const timeFrames = [...document.querySelector("[data-time-frame]").children] // turns htmlCollection into an array using es6 spread operator
const cardTemplate = document.querySelector("[data-card-template]")
// Get json data

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    data.map(cardData => {
      // Select card-template
      const card = cardTemplate.content.cloneNode(true).children[0]

      // Selectors within card-template
      const cardCategory = card.querySelector("[data-card-category]") // for some reason this selector doesn't work
      const cardTitle = card.querySelector("[data-card-title]")
      const currentHours = card.querySelector("[data-current-hours]")
      const previousHours = card.querySelector("[data-previous-hours]")

      renderCards = () => {
      // manipulating DOM w/ data.json
      cardTitle.parentElement.classList.add(cardData.title.replace(/\s+/g, '-').toLowerCase()) // adds class names for tab styles, via data.json, replaces " " for "-" and lower cases the class names
      cardTitle.textContent = cardData.title
      currentHours.textContent = `${cardData.timeframes.weekly.current}hrs` // TODO: add state
      previousHours.textContent = `Last Week - ${cardData.timeframes.weekly.previous}hrs` // TODO: add state

      // fill html's card container with template cards
      cardContainer.append(card)
      }

      renderCards()
    })
  });
  
  console.log(timeFrames)

  state = {
    timeFrame: "weekly"
  }

// looping though the time frames
timeFrames.forEach(timeFrame => console.log(timeFrame))

timeFrames.forEach(timeFrame => timeFrame.addEventListener("click", e = () => {
  timeFrames.forEach(timeFrame => timeFrame.classList.remove("active-time-frame")) // removes active class on all timeframes
  timeFrame.classList.toggle("active-time-frame") // adds active class on clicked timeframe
  switch (timeFrame) {
    case (timeFrames[0]):
      console.log("1 is clicked")
      state.timeFrame = "daily"
      break
    case (timeFrames[1]):
      console.log("2 is clicked")
      state.timeFrame = "weekly"
      break
    case (timeFrames[2]):
      console.log("3 is clicked")
      state.timeFrame = "monthly"
      break
  }
}))