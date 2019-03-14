import React, { Component } from 'react';
import {NavLink ,Route} from 'react-router-dom';





export default  class Navbar extends Component{
  render(){
    return(

      <nav className="  bg-dark navbar navbar-expand-sm">

   <NavLink to="/basket">cart</NavLink>


      </nav>

    )
  }
}
