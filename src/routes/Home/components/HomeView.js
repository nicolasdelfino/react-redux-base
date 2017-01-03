import React from 'react'
import DuckImage from '../assets/Duck.jpg'
// import './HomeView.scss'

export const HomeView = () => (
  <div>
    {/* <h2>Welcome!</h2> */}
    {/* <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} /> */}
    <div>
      <div className='blocker'>
        <h2>Routes</h2>
        <h3>Index</h3>
        <span>index.js => injects the reducer and exports the container component with a route path</span>
        <h3>container</h3>
        <span>containers/*.js => wraps the component of ./component/*.js with connect with mapStateToProps and mapDispatchToProps</span>
        <h3>component</h3>
        <span>components/*.js => actual react component</span>
      </div>
    </div>
  </div>
)

export default HomeView
