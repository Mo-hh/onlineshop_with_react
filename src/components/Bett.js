import React, { Component } from 'react';
import{BettData} from './data';
import{connect} from 'react-redux';
import {Increment} from '../redux';
import {DiscrementBett,addBett} from '../redux';
import {removeFromBasket} from '../redux';
import {NavLink} from 'react-router-dom';






class Bett extends Component {

render() {

  return(
   <>
   <div className="hauptcontanier">
{BettData.map( (item,index) =>{

return(
  <div className="Esstische"  key={index}   className="contanier">
  <NavLink className="nav-link" to="/...."><img  src={item.source}/></NavLink>
    <h3 >{item.Name}</h3>
      <h3 > price:{item.price}$</h3>
    <div className="add">
      <button className="btn btn-danger" onClick={this.props.Increment} identity={index}>+ </button>
       <h3>{this.props['BettV'+index]}</h3>
      <button className="btn btn-dark" onClick={this.props.Discrement} identity={index} >- </button>

    </div>
    <button className="btn btn-info mt-1" buttoncounter={index} price={item.price} Name={item.Name} img={item.source} onClick={this.props.addToOrder} >add to basket  </button>
  </div>
)
}

)}
</div>


  </>

  )
}
}

const mapStateToProps = state=>{
  return{
BettV0:state.BettCounter[0],
BettV1:state.BettCounter[1],
BettV2:state.BettCounter[2],
BettV3:state.BettCounter[3],

  }
}

const mapDispatchToProps = dispatch =>{
  return {
    Increment: ev =>dispatch(Increment(ev)),
    Discrement: ev =>dispatch(DiscrementBett(ev)),
    addToOrder: ev =>dispatch(addBett(ev)),


  }
}
export const Bettcontanier =connect(mapStateToProps,mapDispatchToProps)(Bett)
