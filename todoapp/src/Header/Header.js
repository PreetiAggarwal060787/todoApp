import React from 'react'

export default function () {
  return (
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">ToDoApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="text-white nav-link ">Test</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
