import React, { Component } from "react";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <div>
          <h1>ADD POSTS</h1>
        </div>
        <form>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            ></input>
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            ></textarea>
          </div>
          <br />
          <button type="submit" onSubmit={this.onSubmit}>
            submit
          </button>
        </form>
      </div>
    );
  }
}
export default Postform;
