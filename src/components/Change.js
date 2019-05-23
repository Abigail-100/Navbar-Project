import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

class Change extends React.Component {
    onMouseOver(){
        alert('hi there baby')
    }
   render() {
       const change = [
           "Daniel", "Abigail", "Sintim", "Edith", "Edison" ]
       
     return(
         <div>
         {change.map( item => {
             return(<div onMouseOver={this.onMouserOver}>{item}</div>)
         } )}
         <input type="text" onChange={this.onChange}></input>
         </div>
     )
   }


}


export default Change;