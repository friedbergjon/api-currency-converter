import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import LineTop from "./components/LineTop"
import Animation from "./components/Animation";


const flagUrl = "https://www.countryflags.io/"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     from: "",
     to: "",
     amount: "",
     countries: {}
    
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
 
    console.log(resFrom.data.rates[countryFrom])
    console.log(resTo.data.rates[countryTo])
    // console.log(res)
  //  console.log(countryFromSubstring)
  //  console.log(countryToSubstring)
    //help passing individual country data in the proper syntax from Tyson Morris//
    this.setState({
    flagOn:true,
    countries: res.data.rates,
     resultFrom: resFrom.data.rates[countryFrom],
      resultTo: resTo.data.rates[countryTo],
      result: ( (resTo.data.rates[countryTo]) / (resFrom.data.rates[countryFrom])) * amount,
      resultRounded: Math.floor((( (resTo.data.rates[countryTo]) / (resFrom.data.rates[countryFrom])) * amount)),
     flagFrom: countryFromSubstring,
     flagTo: countryToSubstring,
  })
  // console.log(this.state.countries)
  }
 
//if this.state.from[0,1] === resultFrom, then return this.state.from
  render() {
   
    return (
      
      <div className="App">  
          <LineTop />
      <form onSubmit={this.getCurrencyData}>
         <Animation />
  <div className="amounts">
      <h1>Amount</h1>
        </div>
 <div className = "from-and-to-labels">
      <h3>Country From</h3>
      <h3>Country To</h3> 
      </div> 
      <div>
         <input className = "amount-input" type="text" name="amount" value={this.state.amount} placeholder="amount" id="amount" onChange={this.handleInputChange}/>
       </div>
   <div className="from-and-to-input">
 
  
          <img class="flag-from" src={this.state.flagOn?`${flagUrl + this.state.flagFrom}/shiny/64.png`:null} onChange={this.getCurrencyData}/> 
         
  
           <select className = "from" type="text" name="from" value={this.state.from} onChange={this.handleInputChange} id="from">
           <option value="USD">USD</option>
           <option value="GBP">GBP</option>
           </select>
  
   
          <img class="flag-to" src={this.state.flagOn?`${flagUrl + this.state.flagTo}/shiny/64.png`:null} onChange={this.getCurrencyData}/>
   
   
           <select className = "to" type="text" name="to" value={this.state.to} onChange={this.handleInputChange} id="to"> 
          <option value="USD">USD</option>
           <option value="GBP">GBP</option>
           </select> 
  </div> 
  <div className="result">
          <input className = "result-submit" type="submit" value="Result"/>
          <h2>{this.state.result > 1? this.state.resultRounded: this.state.result}</h2>      
    </div> 
    </form>
   
    
       </div>
       
    )
  }
}
export default App; 