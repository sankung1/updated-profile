import React, {Component} from "react";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Sankung Sillah",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "contact", path: "/contact" },
      ],
      home: {
        title: "Sankung Sillah",
        subtitle: "My portfolio",
        text: "Checkout my projects",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      },
    };
  }
  render(){

    return(
      <div>Hello from React</div>
    )
  }
}

export default App;
