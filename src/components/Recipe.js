import React, { Component } from 'react'

import Form from './Form'

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // sets show or edit state
      static: true,
      name: '',
      ingredients: '',
      directions: ''
    }
  }

  // changes static state to render show or edit components
  changeStaticState = () => {
    this.setState({
      static: !this.state.static
    })
  }

  componentDidMount() {
    if(this.props.updatedRecipe) {
      this.setState({
        static: true
      })
    }
  }

  render () {
    return (
      <div className="recipe">

      {/* check static state */}
      { this.state.static ?

        <div className="recipe-show">

          <div className="name-recipe">
            <h3 className="name" onClick={() => this.props.showRecipe(this.props.recipe._id)}> {this.props.recipe.name}</h3>
          </div>
        { this.props.shownRecipe === this.props.recipe._id ?
        <div>
        <h3>Ingredients: {this.props.recipe.ingredients}</h3>
        <h3>Directions: {this.props.recipe.directions}</h3>
        <img className="photo" src={this.props.recipe.image} alt={this.props.recipe.name}/>
        <br/>

        { /* button click changes static state to false to show edit component */}
        <button onClick={this.changeStaticState}>Edit Recipe</button>
        <button onClick={() => this.props.handleDelete(this.props.recipe._id, this.props.arrayIndex, this.props.currentArray)}>Delete Recipe</button>
        </div>
        : '' }

        </div> :

        // if static state is false, show the edit component

        <div className="recipe-edit">
          <Form
            recipe={this.props.recipe}
            handleCheck={this.props.handleCheck}
            arrayIndex={this.props.arrayIndex}
            changeStaticState={this.changeStaticState}
          />
        </div>
      }
      </div>
    )
  }
}

export default Recipe
