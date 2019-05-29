import React, { Component } from "react";
import "./style.css";
import axios from 'axios'


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
   const countryFrom = this.state.from
   const countryFromSubstring = this.state.from.substring(0,2)
   const countryTo = this.state.to
   const countryToSubstring = this.state.to.substring(0,2)
    const url = "https://api.exchangeratesapi.io/latest?symbols=";
    const flagUrl = "https://www.countryflags.io/"
  
    const resFrom = await axios(`${url}${countryFrom}`);
  
    const resTo = await axios(`${url}${countryTo}`);
   
    const res = await axios(`${url}`);

    console.log(resFrom.data.rates[countryFrom])
    console.log(resTo.data.rates[countryTo])
    console.log(res)
   
    //help passing individual country data in the proper syntax from Tyson Morris//

    this.setState({
     resultFrom: resFrom.data.rates[countryFrom],
      resultTo: resTo.data.rates[countryTo],
      result: ((resFrom.data.rates[countryFrom]) / (resTo.data.rates[countryTo])) * amount,
      // flagTo : flagToUrl,
      // flagFrom : flagFromUrl
  })
  }

 
//if this.state.from[0,1] === resultFrom, then return this.state.from
  render() {
      
   
    
    return (
      <div className="App">
        <br />
       <form onSubmit={this.getCurrencyData}>
         <div><img src="https://media.giphy.com/media/l3mZaGv4Krokd3GM0/giphy.gif" /></div>
      <div>
      
         <input type="text" name="amount" value={this.state.amount} placeholder="amount" id="amount" onChange={this.handleInputChange}/>
          <h1>Amount</h1>
         <input type="text" name="from" value={this.state.from} onChange={this.handleInputChange} placeholder="from" id="from"/>
          <h1>Country From </h1>
          {/* <img src=`https://www.countryflags.io/${countryFromSubstring}/shiny/64.png`></img> */}
          <input type="text" name="to" value={this.state.to} onChange={this.handleInputChange} placeholder="to" id="to"/>
          <h1>Country To </h1> 
  	      <input type="submit" value="result"/>
         <h1>Result: {this.state.result}</h1>
         <br />
         </div>
        </form>
       
      </div>
    )
  }
}
export default App; 

