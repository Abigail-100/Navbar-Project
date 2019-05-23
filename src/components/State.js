import React from 'react';

class State extends React.Component {
    constructor() {
        super();
        this.state = {name: "Daniel"}
    }
   render() {
       setTimeout( () => {
       this.setState({name: "Abigail"})
       }, 2000)
       
     return(
         <div>
         {this.state.name}
         </div>
     )
   }


}


export default State;