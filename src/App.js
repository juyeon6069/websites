import React, { Component } from "react";
import Template from "./components/Template";
import Banner from "./components/Banner";

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        {this.props.children}
        <Template></Template>
      </div>
    );
  }
}

export default App;
