import React, { Component } from 'react';

import Header from './components/Header'
import GoalList from './components/GoalList'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Accountability Frontend</h1>
        <Header />
        <Form />
        <GoalList />
      </div>
    )
  }
}

export default App;
