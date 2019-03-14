import{connect} from 'react-redux';
import React, { Component } from 'react';




 class Basket extends Component{
calculate() {
  return this.props.artikle.reduce((a,b) => a+ b.quantity*b.price,0)

}



  render() {
    return(
      <div className="allorders">

 {this.props.artikle.map((elm,index)=>{
   return(
     <>
     <div className="everyOrder"  key={index}>
      <h3 className="oneclass">{elm.Name}</h3>
      <h3 className="oneclass"> Price:{elm.price}$</h3>
      <h3 className="oneclass"> quantity:{elm.quantity}</h3>
      <img style={{width:"20vw" ,height:"9vw"}}  src={elm.images1}/>

      </div>
      </>
   )
  })
  }
    <h1>{this.calculate().toFixed(2)}$</h1>

     </div>

  )


}
}




const mapStateToProps = state =>{
  return{

artikle:state.basket
}
}

export const HereBasket =connect(mapStateToProps)(Basket)
