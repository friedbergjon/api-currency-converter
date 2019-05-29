import React, { Component } from "react";
import "./style.css";
import axios from 'axios'

const flagUrl = "https://www.countryflags.io/"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     from: "",
     to: "",
     amount: ""
     
    }

    this.getCurrencyData = this.getCurrencyData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    this.setState({
      
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  async getCurrencyData(event) {
    event.preventDefault();
    
    const amount = this.state.amount
   const countryFrom = this.state.from.toUpperCase()
   const countryFromSubstring = countryFrom.substring(0,2)
   const countryTo = this.state.to.toUpperCase()
   const countryToSubstring = countryTo.substring(0,2)
    const url = "https://api.exchangeratesapi.io/latest?symbols=";
    
    const resFrom = await axios(`${url}${countryFrom}`);
    const resTo = await axios(`${url}${countryTo}`);
    const res = await axios(`${url}`);
    // const resFlagFrom = await axios(`${flagUrl}${countryFromSubstring}/shiny/64.png`);
    // const resFlagTo = await axios(`${flagUrl}${countryToSubstring}/shiny/64.png`);
    console.log(resFrom.data.rates[countryFrom])
    console.log(resTo.data.rates[countryTo])
    console.log(res)
   console.log(countryFromSubstring)
   console.log(countryToSubstring)
    //help passing individual country data in the proper syntax from Tyson Morris//

    this.setState({
     resultFrom: resFrom.data.rates[countryFrom],
      resultTo: resTo.data.rates[countryTo],
      result: ( (resTo.data.rates[countryTo]) / (resFrom.data.rates[countryFrom])) * amount,
     flagFrom: countryFromSubstring,
     flagTo: countryToSubstring,

   
  })
  }

 
//if this.state.from[0,1] === resultFrom, then return this.state.from
  render() {
      
   
    
    return (
      <div className="App">
      <form onSubmit={this.getCurrencyData}>
  
  <div className="amounts">
           <input type="text" name="amount" value={this.state.amount} placeholder="amount" id="amount" onChange={this.handleInputChange}/>
          <h1>Amount</h1>
          <input type="submit" value="result"/>
         <h1>Result: {this.state.result}</h1>
    </div>
   <div className="main">
           <input type="text" name="from" value={this.state.from} onChange={this.handleInputChange} placeholder="from" id="from"/>
          <h1>Country From </h1>
          <img src={`${flagUrl + this.state.flagFrom}/shiny/64.png`}/>
        <img style={{width: 50, height: 60, borderRadius: 870}} src="https://media.giphy.com/media/l3mZaGv4Krokd3GM0/giphy.gif" />
          <input type="text" name="to" value={this.state.to} onChange={this.handleInputChange} placeholder="to" id="to"/>
          <h1>Country To </h1> 
          <img src={`${flagUrl + this.state.flagTo}/shiny/64.png`}/>
   </div>  
  
       </form>
       </div>
    )
  }
}
export default App; 

