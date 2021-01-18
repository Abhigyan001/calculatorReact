import React from "react"
import Navbar from './Navbar'
import Quote from './Quote'
import Home from './Home'
import App from './App'
import { Route, Switch } from "react-router-dom"



const NewApp = () => {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={App} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </main>
  )
}

export default NewApp