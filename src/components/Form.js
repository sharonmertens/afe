import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      ingredients: ''
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
      console.log(this.state)
      this.clearForm()
  }

  // clear the form
  clearForm = () => {
    this.setState({
      description: '',
      ingredients: ''
    })
  }

  render () {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br/>
          <input
            type="text"
            placeholder="ingredients"
            id="ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
