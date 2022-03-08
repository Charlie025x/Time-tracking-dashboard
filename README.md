# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Time tracking dashboard solution](#frontend-mentor---time-tracking-dashboard-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [[Add solution URL here](https://github.com/Charlie025x/Time-tracking-dashboard)](https://github.com/Charlie025x/Time-tracking-dashboard)
- Live Site URL: [[Add live site URL here](https://charlie025x.github.io/Time-tracking-dashboard/)](https://charlie025x.github.io/Time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- SCSS

### What I learned

I learned how to render a html template to the DOM, and filling that template with json data. This works similar to a react components.

```html
  <template data-card-template>
    <div data-card-category class="card">
      <h2 data-card-title ><!-- fill w/ json data --></h2>
      <img src="./images/icon-ellipsis.svg" alt="">
      <p data-current-hours class="current-hours">
        <!-- fill w/ json data -->
      </p>
      <p data-previous-hours class="previous-hours">
        <!-- fill w/ json data -->
      </p>
    </div>
  </template>
```

### Continued development

I'm having trouble rerendering the cards on state change. Right now only the last card rerenders on state change.

### Useful resources

- [YouTube video: Can I Create This Complex Animated Multistep Form? - Web Dev Simplified](https://youtu.be/VdqtdKXxKhM) - I learned how to use the template element with html and Javascript, and learned how to select html with "data-" selectors. Template elements work like react components, which is very useful for rendering the cards with the corresponing json data.

## Author

- Website - [Charlie Alonso](https://charlie-alonso.netlify.app/)
- GitHub - [Charlie025x](https://github.com/Charlie025x)
- Frontend Mentor - [@Charlie025x](https://www.frontendmentor.io/profile/Charlie025x)
- LinkedIn - [Charliealonso002](https://www.linkedin.com/in/charliealonso002/)