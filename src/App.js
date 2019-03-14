import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavList from './components/Navlink';

import Bettwelcom from './components/BettComp';
import FirstBett from './components/FirstBett';
import SecoundBett from './components/SecoundBett';
import ThirdBett from './components/ThirdBett';
import SchrankComp from './components/SchrankComp';
import FirshtSchrank from './components/FirstSchrank';
import SecoundSchrank from './components/SecoundSchrank';
import ThirdSchrank from './components/ThirdSchrank';
import FirstSofa from './components/FirstSofa';
import {SecoundSofacontainer} from './components/SecoundSofa';
import ThirdSofa from './components/ThirdSofa';
import SofaComp from './components/SofaComp';
import Navbar from './components/navbar';
import {SofasContainer} from './components/Sofa';
import {EsstishContainer} from './components/EssTisch';
import {HereBasket} from './components/basket';
import {Bettcontanier} from './components/Bett';



import {BrowserRouter,Route,Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (


  <BrowserRouter>
   <>


<Navbar/>


   <Route  path="/" exact render={()=> <h1 className="welcome">welcome in your family Hose</h1>  }/>
   <Switch>
   <Route  path="/" exact component={NavList}/>
   <Route path="/sofas" exact  component ={SofasContainer}/>
   <Route path="/Bette" exact     component ={Bettcontanier}/>
   <Route path="/schränke"  exact component={SchrankComp}/>
   <Route path="/EssTisch"  exact component={EsstishContainer}/>
   <Route   path="/Bette/FirstBett"   component ={ FirstBett}/>
   <Route   path="/Bette/secoundBett"   component ={ SecoundBett}/>
   <Route   path="/Bette/ThirdBett"   component ={ ThirdBett}/>
   <Route   path="/schränke/FirshtSchrank"   component ={ FirshtSchrank}/>
   <Route   path="/schränke/SecoundSchrank"   component ={ SecoundSchrank}/>
   <Route   path="/schränke/ThirdSchrank"   component ={ ThirdSchrank}/>
   <Route   path="/sofas/FirstSofa"   component ={ FirstSofa}/>
   <Route   path="/sofas/SecoundSofa"   component ={ SecoundSofacontainer}/>
   <Route   path="/sofas/ThirdSofa"   component ={ ThirdSofa}/>
   <Route   path="/Basket"   component ={ HereBasket}/>
  </Switch>
<section className="basket_contanier">




</section>

  </>
  </BrowserRouter>
    )


  }
}

export default App;
