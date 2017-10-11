import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import $ from 'jquery'; 
import Joke from './Joke.js';
import './joke.css';


class JokePage extends Component {
  constructor(props) {
    super(props);
    this.state = {joke: this.props.joke,
    				id: this.props.id};
  }
    handleGoBack = (joke,id) => {

  	this.props.handleGoBack();
  }
  render() {
  	return <div className="container margin-top">
  				<div className="columns is-vcentered">
  					<h1 class="title ">{this.state.joke}</h1>
  				</div>

				  <section className="section is-fluid">
				            <button className="button" onClick={this.handleGoBack}>Back</button>
				  </section>
  			</div>

    }
}

export default JokePage;