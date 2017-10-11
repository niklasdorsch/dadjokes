import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import $ from 'jquery'; 
import Joke from './Joke.js';
import JokePage from './JokePage.js';

import Homepage from './Homepage.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {jokes: [],
              showOneJoke: false,
              selectedJoke : "",
              selectedID : ""

            };
  }
  componentDidMount() {
    this.load10();
  }
  load10() {
    for (var i = 0; i<10; i++) {
      this.getJokeFromApi();
    }
  }
  checkId(results) {
    for (var i = 0; i < this.state.jokes.length; i++) {
      if(this.state.jokes[i].joke == results.joke){
        return false;
      }
    } 
    return true;
  }
  checkNotEmpty(result){
    if(result.joke == "") return false;
    return true;
  }
  async getJokeFromApi() { 
    var context =this;
    $.getJSON('https://icanhazdadjoke.com/', function(results) {
          console.log(results.joke);
          var idCheckResult = context.checkId(results);
          var notEmptyResult = context.checkNotEmpty(results);
          if (idCheckResult && notEmptyResult) {
            context.setState({
              jokes: context.state.jokes.concat([{joke : results.joke, jokeId : results.id}])
            })
          }
      });
  }

  componentDidUpdate(prevProps, prevState) {
  }
 

  handleLoadMore = () => {
    this.load10();
  }
  handleGoBack = () => {
        this.setState({
              showOneJoke: false

            });
  }
  handleLoadOneJoke = (joke,id) => {
    this.showOneJoke = true;
    this.setState({
              showOneJoke: true,
              selectedJoke : joke,
              selectedID : id

            });
  }

  
  render() {

    return ( <div>
      {this.state.showOneJoke ?
      <JokePage joke= {this.state.selectedJoke} id={this.state.selectedID} handleGoBack={this.handleGoBack}/> :
      <Homepage jokes={this.state.jokes} handleLoadMore={this.handleLoadMore} handleLoadOneJoke={this.handleLoadOneJoke}/>
      }
      </div>
    );
  }
}

export default App;
