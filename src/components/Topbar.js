import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Usercontext from '../context/Context'

function Topbar() {
    const ans=useContext(Usercontext)
    return (
        <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{ans}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                       <Link to={'/'}><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                       <Link to={'/dashboard'} ><a class="nav-link" href="#">Dashboard</a></Link>
                       <Link to={'/price'} ><a class="nav-link" href="#">Pricing</a></Link>
                       <Link to={'/contact'}><a class="nav-link " aria-disabled="true">contact</a></Link>
                       <Link to={'/Hooks'}><a class="nav-link " aria-disabled="true">Hooks</a></Link>
                       <Link to={'/form'}><a class="nav-link " aria-disabled="true">form</a></Link>
                       <Link to={'/student/list'}><a class="nav-link " aria-disabled="true">student</a></Link>
                       <Link to={'/student/Details'}><a class="nav-link " aria-disabled="true">studentDetails</a></Link>
                       
                       
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar