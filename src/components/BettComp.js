import React, { Component } from 'react';
import {NavLink,Route} from 'react-router-dom';







export default class Bettwelcom extends Component {
  render()  {



return(
  <>
<section className="bettContainer">
<div className="BettRow">
  <img className="BettImg" src="https://i.otto.de/i/otto/16829103/collection-ab-boxspringbett-rubene-inkl-bettkasten-und-topper-weiss-hellgrau.jpg?$formatz$"/>
  <NavLink className="nav-link" to="/Bette/FirstBett">Click</NavLink>
 </div>
 <div className="BettRow">
   <img className="BettImg"  src="https://i.otto.de/i/otto/26201588/home-affaire-polsterbett-amrum-mit-aufwendiger-knopfleistung-am-gepolstertem-kopf-und-fussteil-creme.jpg?$formatz$"/>
   <NavLink className="nav-link" to="/Bette/secoundBett">Click</NavLink>
</div>

 <div  className="BettRow">
   <img className="BettImg"  src="https://i.otto.de/i/otto/20672662/westfalia-schlafkomfort-boxspringbett-wahlweise-mit-bettkasten-microvelours-weiss.jpg?$formatz$"/>
   <NavLink className="nav-link" to="/Bette/ThirdBett">Click</NavLink>
 </div>


</section>




</>
)

  }
}
