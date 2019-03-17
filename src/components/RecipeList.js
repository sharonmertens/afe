import React, { Component } from 'react'

import Recipe from './Recipe'

class RecipeList extends Component {
  render () {
    return (
      <div className="recipe-list">
        this is the recipe list component
        <Recipe />
      </div>
    )
  }
}

export default RecipeList
