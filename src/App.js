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
    // from = this.state.from
  //   const countryTo = this.state.to
   const countryFrom = this.state.from
    const url = "https://api.exchangeratesapi.io/latest?symbols=";

    // const res = await axios(`${url}`);
    const resFrom = await axios(`${url}${countryFrom}`);
    // const resTo = await axios(`${url}${countryTo}`);
    // console.log(resFrom.data.rates);
    // console.log(resTo.data.rates);
    console.log(resFrom.data.rates)

    this.setState({
    //  resultFrom: resFrom.data.rates,
    //   resultTo: resTo.data.rates,
    //   result: res.data.rates
  })
  }

 
//    countries = result.map((country, index) =>
//   // Only do this if items have no stable IDs
//   <li key={index}>
//     {country.text}
//   </li>
// );
  render() {
      
    // const allCountries = result.map((country) => {
    //   return (
    //     <Countries
    //     country={country} 
    //     />
    //   )
    // })
    
    return (
      <div className="App">
        <br />
       <form onSubmit={this.getCurrencyData}>
      <div>
         <input type="text" name="from" value={this.state.from} onChange={this.handleInputChange} placeholder="from" id="from"/>
          <h1>Country From</h1>
          <input type="text" name="to" value={this.state.to} onChange={this.handleInputChange} placeholder="to" id="to"/>
          <h1>Country To</h1> */}
          {/* <input type="text" name="amount" value={this.state.amount} placeholder="amount" id="amount" onChange={this.handleInputChange}/>
          <h1>Amount</h1> */}
  	      <input type="submit" value="result"/>
         {/* <h1>{this.state.resultFrom}</h1>  */}
         <br />
         </div>
        </form>
       
      </div>
    )
  }
}
export default App; 

