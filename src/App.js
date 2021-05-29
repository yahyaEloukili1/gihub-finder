 import React ,{ Component, Fragment,useState } from "react";
import './App.css';
import Navbar  from "./components/Navbar";
import UserItem  from "./components/users/UserItem";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import  About from "./components/users/About";
import  User from "./components/users/User";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

function App(){
const [users,setUsers]= useState([])
const [user,setUser]= useState({})
const [loading,setLoading]= useState(false)

  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_SECRET)
  // this.setState({
  //   loading: true
  // })
  //   const res = await  axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  //   this.setState({
  //     users: res.data, loading : false
  //   })
  // }
 const searchUsers = async text =>{
    setLoading(loading=> true)
    const res = await  axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  
    setUsers(users=>res.data.items)

    setLoading(loading=> false)
  }
  const getUser = async (username)=>{
    setLoading(loading=> true)
    const res = await  axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);

    setUser(user=>res.data)

    setLoading(loading=> false)
  }
  const clearUsers = ()=>{
    setUsers(users=> [])

    setLoading(loading=> false)
  }

    return (
      <Router>
      <div className="App">
        
      <Navbar title="Github finder" icon="fa fa-github"/>
      <div className="container">
        <Switch>
                <Route exact path='/' render={(props)=>{
                 return <>
                    <Search searchUsers={searchUsers} users={users} clearUsers={clearUsers}/>
                    <Users users={users} loading={loading}  />
                  </>
                }
                }/>
                <Route exact  path='/about' component={About}/>
                <Route exact path="/users/:login" render={props=>{
                  return <User {...props} getUser={getUser}
                  loading={loading} user={user}/>
                }}/>
      </Switch>
      </div>
      </div>
      </Router>
    );
  
}

export default App;
