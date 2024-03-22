import React from 'react'
import Contact from './Contact'
import { Link, Outlet } from 'react-router-dom'
import Search from './Search'

function Home() {
    
    
  return (
    <div>
      welcome to all
      <div className='text-end'>
         <Link to={'search'}>
         <button className='btn btn-sm btn-outline-dark'>search</button>
         </Link>
      </div>
      <Outlet/>
        </div>
  )
}

export default Home