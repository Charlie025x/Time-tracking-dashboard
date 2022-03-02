const currentHours = [...document.querySelectorAll('current-hours')]
const cardContainer = document.querySelector("[data-cards-container]")
const cardTemplate = document.querySelector("[data-card-template]")

// Get json data

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    data.map(cardCategory => {
      const card = cardTemplate.content.cloneNode(true).children[0]
      const cardTitle = card.querySelector("[data-card-title]")
      const currrentHours = card.querySelector("[data-current-hours]") // returns numbers instead of strings, resulting in no number rending
      cardTitle.textContent = cardCategory.title
      currentHours.textContent = cardCategory.timeframes.weekly.current
      cardContainer.append(card) // fill html's card container with template cards
      console.log(cardCategory.timeframes.weekly.current) // TODO: turn these numbers into strings
    })
  });
