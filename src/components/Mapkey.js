
import React, { Component } from "react";
import axios from "axios"



class Mapkey extends Component{
    constructor(props) {
        super(props);
    this.state ={
        countries: {}
    }
    }
async componentDidMount() {
            const url = "https://api.exchangeratesapi.io/latest?symbols=";
            const res = await axios(`${url}`);
            console.log(res.data.rates)
            
            this.setState({
              countries: res.data.rates
            })
          }

    render() {
    
        return (

            <div className= "mapkey">
            {/* {Object.keys(this.state.countries).map((key) => ( 
           <ul>
           <li>{key}</li>
           </ul> ))} */}
           </div>
     

        )}
}









export default Mapkey