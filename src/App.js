import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Post from './components/Post'

class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      post: []
    }
    this.dataFetch()
  }

  dataFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        post: json
      })
      )
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        {this.state.post.map(post => <Post id={post.id} title={post.title} body={post.body} />)}
      </div>
    );
  }
}

export default App;
