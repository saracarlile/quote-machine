import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {quote: "\"Things may come to those who wait, but only the things left by those who hustle.\"", author: "Abraham Lincoln", backgroundClass: "purple-500", backgroundClassText:"purple-text"},
        {quote: "\"I never dreamed about success. I worked for it.\"", author: "Estee Lauder", backgroundClass: "pink-500", backgroundClassText:"pink-text"},
        {quote: "\"Hard work doesn't guarantee success, but improves its chances.\"", author: " B. J. Gupta", backgroundClass: "blue-500", backgroundClassText:"blue-text"},
        {quote: "\"There are no secrets to success. It is the result of preparation, hard work, and learning from failure.\"", author: "Colin Powell", backgroundClass: "green-500", backgroundClassText:"green-text"},
        {quote: "\"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.\"", author: "Stephen King", backgroundClass: "blueGray-500", backgroundClassText:"blueGray-text"}, 
        {quote: "\"Work hard in silence, let your success be your noise.\"", author: "Frank Ocean", backgroundClass: "red-500", backgroundClassText:"red-text"},
        {quote: "\"The difference between try and triumph is just a little umph!\"", author: "Marvin Phillips", backgroundClass: "indigo-500", backgroundClassText:"indigo-text"} ], 
      currentQuote: 0  
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote(){
    if(this.state.currentQuote < this.state.quotes.length){
      this.setState({
        currentQuote: this.state.currentQuote += 1
      });
    }
    if(this.state.currentQuote >= this.state.quotes.length){
      this.setState({
        currentQuote: 0
      });
    }
  }

  render() {
    return (
      <div id="container" className={this.state.quotes[this.state.currentQuote]["backgroundClass"]}>
      <div id="quote-box">
        <div id="test">
          <blockquote><p id="text" className={this.state.quotes[this.state.currentQuote]["backgroundClassText"]}>{this.state.quotes[this.state.currentQuote]["quote"]}</p></blockquote>
          <cite><p id="author" className={this.state.quotes[this.state.currentQuote]["backgroundClassText"]}> - {this.state.quotes[this.state.currentQuote]["author"]}</p></cite>
        </div>
        <div class="flex-wrap">
          <button id="new-quote" onClick={this.changeQuote}  className={this.state.quotes[this.state.currentQuote]["backgroundClass"]}>Next Quote</button>
          <p id="social" className={this.state.quotes[this.state.currentQuote]["backgroundClass"]}><a href={"https://twitter.com/intent/tweet?text=" + (encodeURIComponent(this.state.quotes[this.state.currentQuote]["quote"])) + 
          "%0A" + "%20-" + (encodeURIComponent(this.state.quotes[this.state.currentQuote]["author"])) }  id="tweet-quote"><i className="fa fa-twitter"></i></a></p>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
