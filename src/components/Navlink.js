import React, { Component } from 'react';

import {NavLink ,Route} from 'react-router-dom';




export default class NavList extends Component {
  render() {

  return(
    <>
<NavLink className="nav-link" to="/"></NavLink>

    <ul className="ulForNav">
      <div className="div-container">
         <NavLink className="nav-link" to="/sofas"> <img src="https://i.otto.de/i/otto/21627323/sit-more-polsterecke-wahlweise-mit-bettfunktion-bettkasten-und-relaxfunktion-grau.jpg?$formatz$"/></NavLink>

    </div>
        <div className="div-container">
            <NavLink className="nav-link" to="/Bette">    <img src="https://i.otto.de/i/otto/23164807/westfalia-schlafkomfort-polsterbett-in-2-liegehoehen-und-diversen-ausfuehrungen-kunstleder-weiss.jpg?$formatz$"/></NavLink>

        </div>
  
      <div className="div-container">
          <NavLink  className="nav-link" to="/EssTisch">    <img src="https://i.otto.de/i/otto/17274622/essgruppe-5-teilig-grau-weiss-hochglanz.jpg?$formatz$"/></NavLink>

      </div>
    </ul>




</>
  )
}

}
