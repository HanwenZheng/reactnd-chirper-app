import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions";

class NewTweet extends Component {
  state = {
    text: "",
  };

  handleInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleAddTweet(this.state.text, this.props.id));
    this.setState({
      text: "",
    });
  };

  render() {
    let { text } = this.state;
    let tweetLeft = 280 - text.length;

    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleInput}
            className="textarea"
            maxLength={280}
          />
          <div className="tweet-length">{tweetLeft}</div>
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
