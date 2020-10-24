import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import CreateEmployee from './components/employee/CreateEmployee';
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route exact path='/create' component={CreateEmployee}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;