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
        <br></br>
  <div className="amount">
      <h1>Amount</h1>
        </div>
      <div className="input-field">
         <input className = "amount-input" type="text" name="amount" value={this.state.amount} id="amount" onChange={this.handleInputChange}/>
       </div>
       <div className="animation">
      <Animation />
      </div>
       <div className="result">
          <input className = "result-submit" type="submit" value="$ Result $"/>     
    </div> 
    <div className= "result-label">
      <h2>{this.state.result > 1? this.state.resultRounded: this.state.result}</h2>   
    </div>
   <div className="from-and-to-input">
   <container> 
   <h2>Country From</h2>
  <div className ="flag-from-div">
           <select className = "from" type="text" name="from" value={this.state.from} onChange={this.handleInputChange} id="from">
           <option value=" ">   </option> 
           <option value="USD">USD</option>
           <option value="JPY">JPY</option>
           <option value="BGN">BGN</option>
           <option value="CZK">CZK</option>
           <option value="GBP">GBP</option>
           <option value="DKK">DKK</option>
           <option value="HUF">HUF</option>
           <option value="PLN">PLN</option>
           <option value="RON">RON</option>
           <option value="SEK">SEK</option>
           <option value="CHF">CHF</option>
           <option value="ISK">ISK</option>
           <option value="NOK">NOK</option>
           <option value="HRK">HRK</option>
           <option value="RUB">RUB</option>
           <option value="TRY">TRY</option>
           <option value="AUD">AUD</option>
           <option value="BRL">BRL</option>
           <option value="CAD">CAD</option>
           <option value="CNY">CNY</option>
           <option value="HKD">HKD</option>
           <option value="IDR">IDR</option>
           <option value="ILS">ILS</option>
           <option value="INR">INR</option>
           <option value="KRW">KRW</option>
           <option value="MXN">MXN</option>
           <option value="MYR">MYR</option>
           <option value="NZD">NZD</option>
           <option value="PHP">PHP</option>
           <option value="SGD">SGD</option>
           <option value="THB">THB</option>
           <option value="ZAR">ZAR</option>
           </select>
       </div>
       <div className="flag-from-img">
       <img class="flag-from" src={this.state.flagOn?`${flagUrl + this.state.flagFrom}/shiny/64.png`:null} onChange={this.getCurrencyData}/> 
        </div>
       </container>
    <container>
    <h2>Country To</h2>
    <div className ="flag-to-div">
           <select className = "to" type="text" name="to" value={this.state.to} onChange={this.handleInputChange} id="to">
           <option value=" ">   </option>   
           <option value="USD">USD</option>
           <option value="JPY">JPY</option>
           <option value="BGN">BGN</option>
           <option value="CZK">CZK</option>
           <option value="DKK">DKK</option>
           <option value="GBP">GBP</option>
           <option value="HUF">HUF</option>
           <option value="PLN">PLN</option>
           <option value="RON">RON</option>
           <option value="SEK">SEK</option>
           <option value="CHF">CHF</option>
           <option value="ISK">ISK</option>
           <option value="NOK">NOK</option>
           <option value="HRK">HRK</option>
           <option value="RUB">RUB</option>
           <option value="TRY">TRY</option>
           <option value="AUD">AUD</option>
           <option value="BRL">BRL</option>
           <option value="CAD">CAD</option>
           <option value="CNY">CNY</option>
           <option value="HKD">HKD</option>
           <option value="IDR">IDR</option>
           <option value="ILS">ILS</option>
           <option value="INR">INR</option>
           <option value="KRW">KRW</option>
           <option value="MXN">MXN</option>
           <option value="MYR">MYR</option>
           <option value="NZD">NZD</option>
           <option value="PHP">PHP</option>
           <option value="SGD">SGD</option>
           <option value="THB">THB</option>
           <option value="ZAR">ZAR</option>
           </select> 
    </div> 
    <div className="flag-to-img">
   <img className="flag-to" src={this.state.flagOn?`${flagUrl + this.state.flagTo}/shiny/64.png`:null} onChange={this.getCurrencyData}/>
   </div> 
  </container>  
  </div> 
    </form>
    <br></br>
 
    <LineTop />
       </div>
       
    )
  }
}
export default App; 