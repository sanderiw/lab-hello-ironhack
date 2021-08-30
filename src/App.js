import logo from './logo.svg';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';
import ironhackLogo from './assets/images/ironhack-logo.svg';
import menuTop from './assets/images/menu-top.svg';
import reactLogo from './assets/images/react-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-header-nav">
          <img src={ironhackLogo} alt="logo"/>
          <img src={menuTop} alt="logo"/>
        </nav>
        <div className="App-intro">
          <div>
            <h1>Say hello to ReactJS</h1>
          </div>
          <div>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
          </div>
          <div>
            <button type="button">Awesome!</button>
          </div>
        </div>
      </header>
      <section className="App-main">
        <div>
          <img src={icon1} alt="declarative"/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src={icon2} alt="declarative"/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div>
          <img src={icon3} alt="declarative"/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component`s</p>
        </div>
        <div>
          <img src={icon4} alt="declarative"/>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </section>
     
    </div>
  );
}

export default App;
