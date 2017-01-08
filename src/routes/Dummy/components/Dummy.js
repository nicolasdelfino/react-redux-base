import React from 'react'
import './DummyView.scss'

import { IndexLink } from 'react-router'
import Button from '../../../components/Buttons/Button'

class Dummy extends React.Component {

  buttonClicked (value) {
    console.log('button 1 click')
    // this.props.dispatch({ type: 'SET_DUMMY_TEXT', payload: value })
    this.props.setText(value)
  }

  toggeThing () {
    // this.props.dispatch({ type: 'TOGGLE_DUMMY_VALUE' })
    this.props.toggle()
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
        <div className='blocker'>
          <h2>Dummy redux</h2>
          <button onClick={() => this.buttonClicked('monkey')}>
            set redux dummy to monkey
          </button>
          <button onClick={() => this.buttonClicked('cat')}>
            set redux dummy to cat
          </button>
          <p>value: {this.props.dummyText}</p>
        </div>
        <div className='blocker'>
          <h2>Toggle</h2>
          <Button text='toggle thing' clickHandler={() => this.toggeThing()} />
          {this.getBar()}
        </div>
        <div className='blocker'>
          <h2>Link</h2>
          <IndexLink to='/counter'>go to counter</IndexLink>
        </div>
      </div>
    )
  }
}

Dummy.propTypes = {
  setText   : React.PropTypes.func.isRequired,
  toggle   : React.PropTypes.func.isRequired
}

export default Dummy
