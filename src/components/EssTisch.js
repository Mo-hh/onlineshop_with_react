import React, { Component } from 'react';
import{EssTishdata} from './data';
import{connect} from 'react-redux';
import {Increment} from '../redux';
import {Discrement,addToOrder} from '../redux';
import {removeFromBasket} from '../redux';
import {NavLink} from 'react-router-dom';






class EssTisch extends Component {

render() {

  return(
   <>
   <div className="hauptcontanier">
{EssTishdata.map( (item,index) =>{

return(
  <div className="Esstische"  key={index}   className="contanier">
  <NavLink className="nav-link" to="/...."><img  src={item.source}/></NavLink>
    <h3 >{item.Name}</h3>
      <h3 > price:{item.price}$</h3>
    <div className="add">
      <button className="btn btn-danger" onClick={this.props.Increment} identity={index}>+ </button>
       <h3>{this.props['EsstilValue'+index]}</h3>
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
  EsstilValue0:state.EsstishCounter[0],
  EsstilValue1:state.EsstishCounter[1],
  EsstilValue2:state.EsstishCounter[2],
  EsstilValue3:state.EsstishCounter[3],
  EsstilValue4:state.EsstishCounter[4],
  EsstilValue5:state.EsstishCounter[5],
  EsstilValue6:state.EsstishCounter[6]

  }
}

const mapDispatchToProps = dispatch =>{
  return {
    Increment: ev =>dispatch(Increment(ev)),
    Discrement: ev =>dispatch(Discrement(ev)),
    addToOrder: ev =>dispatch(addToOrder(ev)),


  }
}
export const EsstishContainer =connect(mapStateToProps,mapDispatchToProps)(EssTisch)
