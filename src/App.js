import React, { Component } from react;
import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn Rails", complete: true, },
      { id: 2, name: "Learn React", complete: false, },
      { id: 3, name: "Graduate DPL", complete: false, },
    ]
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;
