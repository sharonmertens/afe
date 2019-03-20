import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <h2>Our Family Through The Years</h2>

        <img className="family-photos" src='grandma.jpeg' alt="grandma and kids" />
        <img className="family-photos" src='great_greatparents.jpeg' alt="family generation" />
        <img className="family-photos" src='russia.jpeg' alt="my family in russia" />
        <img className="family-photos" src='vivi.jpg' alt="safta and saba" />

      </div>
    )
  }
}

export default Header
