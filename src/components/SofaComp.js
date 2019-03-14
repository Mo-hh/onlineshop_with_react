import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom';







export default class SofaComp extends Component {
  render()  {



return(
  <>
<section className="bettContainer">
<div className="SchrankRow">
  <img className="BettImg" src="https://i.otto.de/i/otto/16564308/ada-premium-polsterecke-tavola-mit-eleganten-massivholz-elementen-mit-armlehnverstellung-braun-long-4.jpg?$formatz$"/>
  <NavLink className="nav-link" to="/Sofas/FirstSofa">Relax</NavLink>
 </div>
 <div className="SchrankRow">
   <img className="BettImg"  src="https://i.otto.de/i/otto/24499864/nolte-moebel-drehtuerenschrank-concept-me-100.jpg?$formatz$"/>
   <NavLink className="nav-link" to="/Sofas/SecoundSofa">Click</NavLink>
</div>

 <div  className="SchrankRow">
   <img className="BettImg"  src="https://i.otto.de/i/otto/20672662/westfalia-schlafkomfort-boxspringbett-wahlweise-mit-bettkasten-microvelours-weiss.jpg?$formatz$"/>
   <NavLink className="nav-link" to="/Sofas/ThirdSofa">Click</NavLink>
 </div>


</section>




</>
)

  }
}
