import React, { Component } from "react";
import "./style.css";
import axios from "axios";


const flagUrl = "https://www.countryflags.io/"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     from: "",
     to: "",
     amount: "",
     countries: {},
    }

    this.getCurrencyData = this.getCurrencyData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    this.setState({
      
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  addDefaultSrcFrom(event){
    event.target.src = "https://cdn130.picsart.com/290045826002201.jpg?c256x256"
  }
  addDefaultSrcTo(event){
    event.target.src = "https://cdn130.picsart.com/290045826002201.jpg?c256x256"
  }

  async componentDidMount() {
    const url = "https://api.exchangeratesapi.io/latest?symbols=";
    const res = await axios(`${url}`);
    console.log(res.data.rates)
    this.setState({
      countries: res.data.rates
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
    // console.log(resTo.data.rates[countryTo])
    console.log(res)
  //  console.log(countryFromSubstring)
  //  console.log(countryToSubstring)
    //help passing individual country data in the proper syntax from Tyson Morris//
    this.setState({
      // countries: res.data.rates,
     resultFrom: resFrom.data.rates[countryFrom],
      resultTo: resTo.data.rates[countryTo],
      result: ( (resTo.data.rates[countryTo]) / (resFrom.data.rates[countryFrom])) * amount,
     flagFrom: countryFromSubstring,
     flagTo: countryToSubstring,

   
  })
  console.log(this.state.countries)
  }
 
//if this.state.from[0,1] === resultFrom, then return this.state.from
  render() {
    
    return (
      
      <div className="App">
          
       <hr></hr>
       <div className= "mapkey">
          {Object.keys(this.state.countries).map((key) => ( 
          <ul>
          <li>{key}</li>
          </ul> ))}
      </div>
      <form onSubmit={this.getCurrencyData}>
          <img id = "coins" src="https://media.giphy.com/media/l3mZaGv4Krokd3GM0/giphy.gif" />
  <div className="amounts">
      <h1>Enter Amount</h1>
        </div>
       <div>
         <input className = "amountInput" type="text" name="amount" value={this.state.amount} placeholder="amount" id="amount" onChange={this.handleInputChange}/>
       </div>
 <div className = "fromAndToLabels">
      <h3>Country From </h3>
      <h3>Country To </h3> 
      </div>   
   <div className="fromAndToInput">
           <input className = "from" type="text" name="from" value={this.state.from} onChange={this.handleInputChange} placeholder="from" id="from"/>
          <input className = "to" type="text" name="to" value={this.state.to} onChange={this.handleInputChange} placeholder="to" id="to"/>  
          {/* // https://stackoverflow.com/questions/38527759/how-to-check-for-broken-images-in-react-js */}
      </div> 
      <div className="result">
          <input className = "resultSubmit" type="submit" value="Result"/>
          <h2>{this.state.result}</h2> 
    </div> 
        
    </form>
  <div className ="flag">
          <img class="flagFrom" src={`${flagUrl + this.state.flagFrom}/shiny/64.png`} onError={this.addDefaultSrcFrom}/> 
          <img class="flagTo" src={`${flagUrl + this.state.flagTo}/shiny/64.png`} onError={this.addDefaultSrcTo}/>
          </div>
  
      <hr className= "bottomLine"></hr>
       </div>
       
    )
  }
}
export default App; 

