import userImg from './images/image-jeremy.png'
import iconEllipsis from './images/icon-ellipsis.svg'

function App() {
  return (
    <main data-cards-container>
    <div class="user-card">
      <div class="user-header">
        <img src={userImg} alt=""/>
        <h1>
          Report for
          <a>Jeremy Robson</a>
        </h1>
      </div>
      <div data-time-frame class="time-frame">
        <a>Daily</a>
        <a class="active-time-frame">Weekly</a>
        <a>Monthly</a>
      </div>
    </div>

    <div class="card work">
      <h2>Work</h2>
      <img src={iconEllipsis} alt=""/>
      <p class="current-hours">
        32hrs
      </p>
      <p class="previous-hours">
        Previous - 36hrs
      </p>
    </div>

  </main>
  );
}

export default App;
