 import React ,{ Component } from "react";
import './App.css';
import Navbar  from "./components/Navbar";
import UserItem  from "./components/users/UserItem";
import Users from "./components/users/Users";
class App extends Component {

  render(){
    return (
      <>
      <Navbar title="Github finder" icon="fa fa-github"/>
      <div className="container">
     
      <Users/>
      </div>
      </>
    );
  }
}

export default App;
