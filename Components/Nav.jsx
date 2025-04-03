import React from 'react'

const Nav = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-primary ps-5 fs-2" href="#"> <b> Medi <span className='text-danger'>Care+</span></b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav pe-5">
        <a className="nav-link text-primary active px-3" aria-current="page" href="#"><b>Home</b></a>
        <a className="nav-link text-primary px-3" href="#">About</a>
        <a className="nav-link text-primary px-3" href="#">Services</a>
        <a className="nav-link text-primary px-3" >News</a>
        <a className="nav-link text-primary px-3 pe-5" >Connect</a>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav