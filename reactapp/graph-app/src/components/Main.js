import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Repos from './Repos'
import User from './user'
import Graph from './graph'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Repos' component={Repos}/>
      <Route path='/user' component={User}/>
      <Route path='/graph' component={Graph}/>
    </Switch>
  </main>
)

export default Main
