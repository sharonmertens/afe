import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      ingredients: ''
    }
  }

  render () {
    return (
      <div className="form">
        <form>
          <input
            type="text"
            placeholder="description"
            id="description"
          />
          <br/>
          <input
            type="text"
            placeholder="ingredients"
            id="ingredients"
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
