import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom';







export default class SchrankComp extends Component {
  render()  {



return(
  <>
<section className="bettContainer">
<div className="SchrankRow">
  <img className="BettImg" src="https://i.otto.de/i/otto/13256368/wiemann-schlafzimmer-set-shanghai-4-teilig-weiss-weiss-saharaglas.jpg?$formatz$"/>
  <NavLink className="nav-link" to="/schränke/FirshtSchrank">Click</NavLink>
 </div>
 <div className="SchrankRow">
   <img className="BettImg"  src="https://i.otto.de/i/otto/24499864/nolte-moebel-drehtuerenschrank-concept-me-100.jpg?$formatz$"/>
   <NavLink className="nav-link" to="/schränke/SecoundSchrank">Click</NavLink>
</div>

 <div  className="SchrankRow">
   <img className="BettImg"  src="https://i.otto.de/i/otto/20672662/westfalia-schlafkomfort-boxspringbett-wahlweise-mit-bettkasten-microvelours-weiss.jpg?$formatz$"/>
   <NavLink className="nav-link" to="/schränke/ThirdSchrank">Click</NavLink>
 </div>


</section>




</>
)

  }
}
