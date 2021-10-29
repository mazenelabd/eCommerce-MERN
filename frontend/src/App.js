import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import Profile from './screens/Profile'
import Header from './components/Header'
import CreateProduct from './screens/CreateProduct'
import Home from './screens/Home'
import Product from './screens/Product'
import Cart from './screens/Cart'
import Shipping from './screens/Shipping'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/shipping' component={Shipping} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
      <Route path='/admin/product/create' component={CreateProduct} />
      <Route path='/product/:id' component={Product} />
      <Route path='/cart/:id?' component={Cart} />
      <Route path='/search/:keyword' component={Home} exact />
      <Route path='/page/:pageNumber' component={Home} exact />
      <Route path='/search/:keyword/page/:pageNumber' component={Home} exact />
      <Route path='/' component={Home} exact />
    </BrowserRouter>
  )
}

export default App
