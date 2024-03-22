import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Search() {
  return (
    <div>
        hello
      <div className='text-end'>
       <Link to={'settings'}>
        <button className='btn btn-sm btn-outline-danger'>settings</button>
       </Link>
      <Outlet/>
      </div>
    </div>
  )
}

export default Search