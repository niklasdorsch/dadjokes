import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import Joke from './Joke.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {jokes : []};
  }
  add10() {
     var myElement = document.getElementById("jokeArea");
     myElement.appendChild( <Joke/>);
     console.log("here");
  }
  
  render() {
    return (
      <div>
        <section className="section is-fluid">
          <container className="container">
            <h1 className="title">Dad Jokes</h1>
            <h2 className="subtitle">Because sometimes you need to be reminded just how bad jokes can get</h2>
          </container>
        </section>

        <section className="section" id="jokeArea">
            <Joke/>
        </section>

      
      <button onclick={this.add10}></button>
      </div>

    );
  }
}

export default App;
