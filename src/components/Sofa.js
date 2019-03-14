import React, { Component } from 'react';
import{SofasData} from './data';
import{connect} from 'react-redux';

import {Discrement,addToorder2,Increment,DiscrementSofa} from '../redux';

import {NavLink} from 'react-router-dom';



 class AllSofas extends Component{

  render() {

    return(
      <>
      <div className="hauptcontanier">
        { SofasData.map((item,index)=>{
        return(


               <div  key={index}   className="contanier">
                <NavLink className="nav-link" to="/...."><img  src={item.source}/></NavLink>
                <h3 >{item.Name}</h3>
                <h3 > price:{item.price}$</h3>
                <div className="add">
                 <button className="btn btn-danger ml-3" onClick={this.props.Increment} identity={index}>+ </button>
                  <h3>{this.props['sofaValue'+index]}</h3>
                  <button className="btn btn-dark mr-3" onClick={this.props.Discrement} identity={index} >- </button>
            </div>
             <button className="btn btn-info mt-3" onClick={this.props.addOrder} buttoncounter={index} price={item.price} Name={item.Name} img1={item.source} >add to basket</button>
            </div>

          )
          }

          )}

       </div>
       </>
     )
   }
   }



const mapStateToProps= state=>{
  return{
  sofaValue0:state.SofaCounter[0],
  sofaValue1:state.SofaCounter[1],
  sofaValue2:state.SofaCounter[2],
  sofaValue3:state.SofaCounter[3]




  }
}
const mapDispatchToProps = dispatch =>{
  return{
    Increment:ev =>dispatch(Increment(ev)),
    Discrement:ev =>dispatch(DiscrementSofa(ev)),
    addOrder:ev =>dispatch(addToorder2(ev))
  }
}

export const SofasContainer =connect(mapStateToProps,mapDispatchToProps)(AllSofas)
