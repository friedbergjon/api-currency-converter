import React, { Component } from "react";
import "./style.css";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     currencyFrom: "",
      currencyTo: ""
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
    const url = "http://data.fixer.io/api/latest?access_key=";
    const api_key = "19a134dc8bb335545f8993b6da04b496";
    const res = await axios(`${url}${api_key}`);

    console.log(res.data);
    this.setState({
  
//
  })
  }

  render() {


    
    return (
      <div className="App">
       <form onSubmit={this.getCurrencyData}>
          <input type="text" name="currency-from" value={this.state.currencyFrom} placeholder="currency-from" id="currency-from" onChange={this.handleInputChange}/>
  	      <input type="submit" value="get-currency" id="getTemp"/>
         
        </form>
      </div>
    )
  }
}
export default App; 

