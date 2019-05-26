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
        <br />
       <form onSubmit={this.getCurrencyData}>
      <div>
          <input type="text" name="from" value={this.state.from} onChange={this.handleInputChange}/>
          <h1>Country From</h1>
          <input type="text" name="to" value={this.state.to} onChange={this.handleInputChange}/>
          <h1>Country To</h1>
          <input type="text" name="amount" value={this.state.amount} onChange={this.handleInputChange}/>
          <h1>Amount</h1>
  	      <input type="submit" value="Result"/>
         <br />
         </div>
        </form>
       
      </div>
    )
  }
}
export default App; 

