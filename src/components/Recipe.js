import React, { Component } from 'react'

class Recipe extends Component {
  render () {
    return (
      <div className="recipe">
        <h3>Description: {this.props.recipe.description}</h3>
        <h3>Ingredients: {this.props.recipe.ingredients}</h3>
        <br/>
      </div>
    )
  }
}

export default Recipe
