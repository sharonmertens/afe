import React, { Component } from 'react'

import Recipe from './Recipe'

class RecipeList extends Component {
  render () {
    return (
      <div className="recipe-list">
        this is the recipe list component
        { this.props.recipes.map((recipe, index) => {
          return (
            <Recipe
              recipe={recipe}
              key={index}
            />
          )
        })}

      </div>
    )
  }
}

export default RecipeList
