import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import $ from 'jquery'; 
import Joke from './Joke.js';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {jokes: this.props.jokes};
  }
  componentWillReceiveProps(nextProps) {
  	this.setState ({jokes: nextProps.jokes});
  }
  handleLoadOneJoke = (joke,id) => {
  	this.props.handleLoadOneJoke(joke,id);
  }
  
  handleLoadMore = (joke,id) => {

  	this.props.handleLoadMore();
  }

  render() {
  		var context = this;
       return  <div>
        <section className="section is-fluid">
          <container className="container">
            <h1 className="title">Dad Jokes</h1>
            <h2 className="subtitle">Because sometimes you need to be reminded just how bad jokes can get</h2>
          </container>
        </section>

        <section className="section" id="jokeArea">
            
            {$.map(this.state.jokes, function(item,index){
              return <Joke joke={item.joke} jokeid={item.jokeId} key={index} handleLoadOneJoke={context.handleLoadOneJoke}/>;
            })}
        </section>
        <section className="section is-fluid">
            <button className="button" onClick={this.handleLoadMore}>Load More</button>
        </section>

      
      </div>
    }
}
export default Homepage;
