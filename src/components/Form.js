import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      ingredients: '',
      directions: '',
      image: '',
      // variable to identify if the form is benig used to add a new recipe or edit an existing recipe
      submit: 'Add'
    }
  }

  // handle change
  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({ [event.target.id]: event.target.value})
  }

  // handle submit
  handleSubmit = (event) => {
      event.preventDefault()
      // console.log(this.state)
      if (this.state.submit === 'Add') {
        this.props.handleCreateRecipe(this.state)
        this.clearForm()
      } else {
        console.log(this.props.arrayIndex)
        let updatedRecipe = {
          _id: this.props.recipe._id,
          name: this.state.name,
          ingredients: this.state.ingredients,
          directions: this.state.directions,
          image: this.state.image
        }
        // send data to handleCheck to update recipe details
        this.props.handleCheck(updatedRecipe, this.props.arrayIndex, 'recipes')
        // change static state to revert to show state
        this.props.changeStaticState()
      }
  }

  // clear the form
  clearForm = () => {
    this.setState({
      name: 'Name',
      ingredients: 'Ingredients',
      directions: 'Directions',
      image: 'Image',
      submit: 'Add'
    })
  }

  // check if the form is for editing exiting element
  checkIfEditing = () => {
    // if there is a recipe being sent to the form
    if (this.props.recipe) {
      // set teh state
      this.setState({
        // pull the values in from the details as placeholder so you know what you are editing
        name: this.props.recipe.name,
        ingredients: this.props.recipe.ingredients,
        directions: this.props.recipe.directions,
        image: this.props.recipe.image,
        submit: 'Update'
      })
    }
  }

  // check if the form is being called by an editing request
  componentDidMount() {
    this.checkIfEditing()
  }

  render () {
    return (
      <div className="text">
      Add a new recipe:
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name your dish"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            placeholder="ingredients"
            id="ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
          />

          <input
            type="text"
            placeholder="directions"
            id="directions"
            value={this.state.directions}
            onChange={this.handleChange}
          />
          
          <input
            type="text"
            placeholder="photo"
            id="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.props.changeStaticState}>Cancel</button>
          <button type="submit">{this.state.submit}</button>
        </form>
      </div>
    )
  }
}

export default Form
