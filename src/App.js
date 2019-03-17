import React, { Component } from 'react';

import Header from './components/Header'
import RecipeList from './components/RecipeList'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  // fetching our api data
  fetchRecipes = () => {
    console.log('fetch recipes is running')
    fetch('http://localhost:3000/recipes')
    .then(data => data.json())
    .then(jData => {
      this.setState({ recipes: jData })
    })
  }

  // component did mount life cycle
  componentDidMount() {
    this.fetchRecipes()
  }

  render() {
    // this.fetchGoals()
    return (
      <div className="main-container">
        <h1>Recipes Frontend</h1>
        <Header />
        <Form />
        {this.state.recipes[0] ? <RecipeList recipes={this.state.recipes}/> : '' }
      </div>
    )
  }
}

export default App;
