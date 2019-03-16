import React, { Component } from 'react';

import Header from './components/Header'
import GoalList from './components/GoalList'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: []
    }
  }

  // fetching our api data
  fetchGoals = () => {
    console.log('fetch goals is running')
    fetch('http://localhost:3000/goals')
    .then(data => data.json())
    .then(jData => {
      this.setState({ goals: jData })
    })
  }

  render() {
    // this.fetchGoals()
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
