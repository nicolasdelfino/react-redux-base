import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/dummy' activeClassName='route--active'>
      Dummy
    </Link>
    {' · '}
    <Link to='/personlist' activeClassName='route--active'>
      Person api
    </Link>
  </div>
)

export default Header
