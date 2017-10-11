import React, { Component } from 'react';
import $ from 'jquery'; 
import './joke.css';

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {joke: [], id : []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    var ourContext = this;
    $.getJSON('https://icanhazdadjoke.com/', function(results) {
          console.log(results.joke);
          ourContext.setState({joke: results.joke});
          ourContext.setState({id: results.id});

      });
    }

  render() {
     var jokes =  <div class="joke-box">
                      <h5>{ this.state.joke }</h1>
                      <span>{this.state.id }</span>
                    </div>;
    

    return (
      <div id="" className="">
        <div className="">{ jokes }</div>
      </div>
    );
  }
}
export default APIHandler;