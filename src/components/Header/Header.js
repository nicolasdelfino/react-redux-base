import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>#r</h1>
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
    <Link to='/apis' activeClassName='route--active'>
      Api stuff
    </Link>
  </div>
)

export default Header
