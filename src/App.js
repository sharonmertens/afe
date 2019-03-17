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

  // creating new recipes
  handleCreateRecipe = (recipe) => {
    // console.log(recipe)
    fetch('http://localhost:3000/recipes', {
      body: JSON.stringify(recipe),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdRecipe => {
      return createdRecipe.json()
    })
    .then(jData => {
      // this.fetchRecipes()
      this.updateArray(jData, 'recipes')
      console.log(jData)
    })
    .catch(err => console.log(err))
  }

  // update state of array
  updateArray = (recipe, array) => {
    // console.log(recipe)
    // console.log(array)
    this.setState( prevState => {
      console.log(prevState[array])
      prevState[array].push(recipe)
      console.log(prevState)
      return {
        recipes: prevState[array]
      }
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
        <Form
          handleCreateRecipe={this.handleCreateRecipe}
        />
        {this.state.recipes[0] ? <RecipeList recipes={this.state.recipes}/> : '' }
      </div>
    )
  }
}

export default App;
