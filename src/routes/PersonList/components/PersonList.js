import React from 'react'
import Button from '../../../components/Buttons/Button'

class PersonList extends React.Component {

  buttonClicked () {
    this.props.loadPersons()
  }

  getUsers () {
    return this.props.users.map((user) => {
      return <p key={user.id}>{user.name} {user.email}</p>
    })
  }

  render () {
    return (
      <div>
        <h1>Person List</h1>
        <Button text='load person list' clickHandler={() => this.buttonClicked()} />
        <hr />
        <div>{this.getUsers()}</div>
      </div>
    )
  }
}

PersonList.propTypes = {
  loadPersons   : React.PropTypes.func.isRequired
}

export default PersonList
