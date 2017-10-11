import React from 'react';
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
          ourContext.setState({joke: results.joke});
          ourContext.setState({id: results.id});

      });
  }
  clickedJoke = (e) => {
    this.props.handleLoadOneJoke(this.state.joke, this.state.id);
  }

  render() {
     var jokes =  <div className="box">
                    <div className="media">
                     <div className="media-left" onClick={this.clickedJoke}>
                        <figure className="image is-64x64 grow" >
                          <img src={require("./dad.png")} alt="Your dad is cool"></img>
                        </figure>
                      </div>
                    
                      <div className="media-content">
                        <div className="content">
                          <strong><h5>{ this.props.joke }</h5></strong>
                          <div className="is-pulled-right">
                            <small><span>ID: {this.props.jokeid }</span></small>
                          </div>
                        </div>
                      </div>
                      <nav className="level is-mobile">
                        <span className="icon is-small"><i className="fa fa-reply"></i></span>
                      </nav>
                    </div>
                  </div>;


    return (
      <div id="" className="">
        <div className="">{ jokes }</div>
      </div>
    );
  }
}
export default Joke;