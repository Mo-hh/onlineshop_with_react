import {createStore} from 'redux';

const initialState = {
 EsstishCounter :[0,0,0,0],
 SofaCounter :[0,0,0,0],
 BettCounter :[0,0,0,0],
 basket:[]
}

const reducer =(state=initialState,action) =>{
  const copyofState={...state};

  switch (action.type) {
    case 'INC':
    var ButtonIdentityINcrement =action.event.target.getAttribute('identity')
    copyofState.EsstishCounter[ButtonIdentityINcrement]= state.EsstishCounter[ButtonIdentityINcrement]+1;
    copyofState.SofaCounter[ButtonIdentityINcrement]= state.SofaCounter[ButtonIdentityINcrement]+1;
    copyofState.BettCounter[ButtonIdentityINcrement]= state.BettCounter[ButtonIdentityINcrement]+1;
    return copyofState;

     case'DIS':
      const ButttonIdentityDiscrement=action.event.target.getAttribute('identity')

      if( copyofState.EsstishCounter[ButttonIdentityDiscrement]<=0 || copyofState.SofaCounter[ButttonIdentityDiscrement]<=0
        ){
       copyofState.EsstishCounter[ButttonIdentityDiscrement]=0
       copyofState.SofaCounter[ButttonIdentityDiscrement]=0;



 }    else {
      copyofState.EsstishCounter[ButttonIdentityDiscrement]=state.EsstishCounter[ButttonIdentityDiscrement]-1
 }
      return copyofState;
      case'DIS2':
       const ButttonIdentityDiscrement1=action.event.target.getAttribute('identity')

       if( copyofState.SofaCounter[ButttonIdentityDiscrement1]<=0
         ){
        copyofState.SofaCounter[ButttonIdentityDiscrement1]=0



  }    else {
       copyofState.SofaCounter[ButttonIdentityDiscrement1]=state.SofaCounter[ButttonIdentityDiscrement1]-1
  }
       return copyofState;

       case'DIS3':
        var ButttonIdentityDiscrement1=action.event.target.getAttribute('identity')

        if( copyofState.BettCounter[ButttonIdentityDiscrement1]<=0
          ){
         copyofState.BettCounter[ButttonIdentityDiscrement1]=0



   }    else {
        copyofState.BettCounter[ButttonIdentityDiscrement1]=state.BettCounter[ButttonIdentityDiscrement1]-1
   }
        return copyofState;
    case 'addEsstisch':
    var price=action.event.target.getAttribute('price')
    var Name=action.event.target.getAttribute('Name')
    var images1=action.event.target.getAttribute('img')
    var buttonIdentinty=action.event.target.getAttribute('buttoncounter')

    var productFind =copyofState.basket.find(item => item.Name===Name)

if(productFind){
  productFind.quantity=copyofState.EsstishCounter[buttonIdentinty]
}
else {
var  productObject={Name:Name,price:price,quantity:copyofState.EsstishCounter[buttonIdentinty],images1:images1}
copyofState.basket=[...state.basket,productObject]
}

console.log(copyofState.basket);

return copyofState;

     case 'addSofa':
     var price=action.event.target.getAttribute('price')
     var Name=action.event.target.getAttribute('Name')
     var images1 =action.event.target.getAttribute('img1')
     var buttonIdentinty=action.event.target.getAttribute('buttoncounter')


     var productFind =copyofState.basket.find(item=>item.Name===Name)



     if(productFind){
       productFind.quantity=copyofState.SofaCounter[buttonIdentinty]
     } else {
       var productObject={Name:Name,price:price,quantity:copyofState.SofaCounter[buttonIdentinty],images1:images1}
       copyofState.basket=[...state.basket,productObject]
     }
     console.log(copyofState.basket);
    return copyofState;
    case'addBett':
    var price=action.event.target.getAttribute('price')
    var Name=action.event.target.getAttribute('Name')
    var images1=action.event.target.getAttribute('img')
    var buttonIdentinty=action.event.target.getAttribute('buttoncounter')

    var productFind =copyofState.basket.find(item=> item.Name===Name)


    if(productFind){
      productFind.quantity=copyofState.BettCounter[buttonIdentinty]
    }else {
      var productObject={Name:Name,price:price,quantity:copyofState.BettCounter[ buttonIdentinty],images1:images1 }
      copyofState.basket=[...state.basket,productObject]
    }
    return copyofState;

// case 'addSofas':
//   const






    default:
    return state;

  }
}








export const Increment = (ev)=>{
return {type:'INC',event:ev}

}
export const sofaIncrement = (ev)=>{
return {type:'INCSofas',event:ev}

}

export const Discrement =(ev) =>{
  return {type:'DIS',event:ev}
}

export const DiscrementSofa =(ev) =>{
  return {type:'DIS2',event:ev}
}
export const DiscrementBett =(ev) =>{
  return {type:'DIS3',event:ev}
}
export const addToOrder =(ev) =>{
  return {type:'addEsstisch',event:ev}
}
 export const addToorder2 =(ev)=>{
   return{type:'addSofa',event:ev}
 }
export const addSofas =(ev) =>{
  return{type:'addSofas',event:ev}
}
export const addBett =(ev) =>{
  return{type:'addBett',event:ev}
}






export  const store = createStore(reducer);
