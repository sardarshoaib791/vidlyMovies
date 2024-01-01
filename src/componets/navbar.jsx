import React, { Component } from 'react';

// state less functional componets
const Navbar = ({totalCounters}) => {

return (<nav style={{backgroundColor:'gray'}} className="navbar bg-body-tertiary">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Navbar <span className='badge bade-pill badge-secondary'>{totalCounters}</span></a>
</div>
</nav>);
  
}
 
export default Navbar;
