

import React, { Component } from "react";


const flagUrl = "https://www.countryflags.io/"
class Flags extends Component{





    render() {
    
        return (

<div className ="flag">
          <img class="flag-from" src={`${flagUrl + this.state.flagFrom}/shiny/64.png`} onError={this.addDefaultSrcFrom}/> 
          <img class="flag-to" src={`${flagUrl + this.state.flagTo}/shiny/64.png`} onError={this.addDefaultSrcTo}/>
          </div>

        )}
}









export default Flags



