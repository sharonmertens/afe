import React, { Component } from 'react'

import Recipe from './Recipe'

class RecipeList extends Component {
  render () {
    return (
      <div className="recipe-list">

        { this.props.recipes.map((recipe, index) => {
          return (
            <Recipe
              recipe={recipe}
              key={index}
              arrayIndex={index}
              handleCheck={this.props.handleCheck}
              handleDelete={this.props.handleDelete}
              showRecipe={this.props.showRecipe}
              currentArray="recipes"
              shownRecipe={this.props.shownRecipe}
            />
          )
        })}

      </div>
    )
  }
}

export default RecipeList
