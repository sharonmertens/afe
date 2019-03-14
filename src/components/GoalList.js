import React, { Component } from 'react'

import Goal from './Goal'

class GoalList extends Component {
  render () {
    return (
      <div className="goal-list">
        this is the goal list component
        <Goal />
      </div>
    )
  }
}

export default GoalList
