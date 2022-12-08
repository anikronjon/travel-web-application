import React from 'react'
import {NavLink} from 'react-router-dom'


export default function Nav() {
  return (
    <div className='flex justify-center gap-4 border-b py-4 shadow'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/hotel'>Hotel</NavLink>
      <NavLink to='/resturent'>Resturent</NavLink>
    </div>
  )
}
