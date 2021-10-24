import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Profile'
import Header from './components/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
    </BrowserRouter>
  )
}

export default App
