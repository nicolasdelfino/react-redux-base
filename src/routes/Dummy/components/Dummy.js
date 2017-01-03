import React from 'react'
import './DummyView.scss'

import { IndexLink } from 'react-router'
import Button from '../../../components/Buttons/Button'

class Dummy extends React.Component {

  buttonClicked (value) {
    console.log('button 1 click')
    this.props.dispatch({ type: 'SET_DUMMY_TEXT', payload: value })
  }

  toggeThing () {
    this.props.dispatch({ type: 'TOGGLE_DUMMY_VALUE' })
  }

  getBar () {
    if (this.props.showBar) {
      return <div style={{ flex:1, marginTop: 20, height: 40, backgroundColor: '#000000', alignSelf:'center' }} />
    }
    return <div style={{ flex:1, marginTop: 20, height: 40, backgroundColor: '#CCC', alignSelf:'center' }} />
  }

  render () {
    return (
      <div>
        <h2>Dummy test view</h2>
        <Button text='set redux dummy to monkey' clickHandler={() => this.buttonClicked('monkey')} />
        <Button text='set redux dummy to cat' clickHandler={() => this.buttonClicked('cat')} />
        <hr />
        <h2>Dummy redux value:</h2>
        <p>{this.props.dummyText}</p>
        <hr />
        <Button text='toggle thing' clickHandler={() => this.toggeThing()} />
        {this.getBar()}
        <hr />
        <IndexLink to='/counter'>go to counter</IndexLink>
      </div>
    )
  }
}

export default Dummy
