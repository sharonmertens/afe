import React, { Component } from 'react';

import Header from './components/Header'
import RecipeList from './components/RecipeList'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [],
      shownRecipe: ''
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

  // show recipe
  showRecipe = (recipe) => {
    console.log('show recipe is running')
    this.setState({ shownRecipe: recipe})
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

  // handles updating the recipe
  handleCheck = (recipe, arrayIndex) => {
    // console.log(recipe)
    // console.log(arrayIndex)
    this.editRecipe(recipe, arrayIndex)

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

  // remove a recipe from array
  removeFromArray = (array, arrayIndex) => {
    this.setState( prevState => {
      console.log(prevState[array])
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  // edit recipe
  editRecipe = (recipe, index) => {
    console.log(JSON.stringify(recipe))
    fetch(`http://localhost:3000/recipes/${recipe._id}`, {
      body: JSON.stringify(recipe),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedRecipe => {
      return updatedRecipe.json()
    })
    .then(jData => {
      console.log(jData)
      this.fetchRecipes()
    })
    .catch(err => console.log(err))
  }

  // delete recipe
  handleDelete = (_id, arrayIndex, currentArray) => {
    fetch(`http://localhost:3000/recipes/${_id}`, {
      method: 'DELETE'
    })
    .then(data => {
      this.removeFromArray(currentArray, arrayIndex)
    })
    .catch(err => console.log(err))
  }


  // component did mount life cycle
  componentDidMount() {
    this.fetchRecipes()
  }

  render() {
    return (
      <div className="main-container">
        <h1>MERTENS-TEITELMAN FAMILY RECIPES</h1>
        <h3>One place for all our family traditions and flavors</h3>

        <Header />
        <Form
          handleCreateRecipe={this.handleCreateRecipe}
        />
        <RecipeList
          recipes={this.state.recipes}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
          showRecipe={this.showRecipe}
          currentArray="recipes"
          shownRecipe={this.state.shownRecipe}
        />
      </div>
    )
  }
}

export default App;
