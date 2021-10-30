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
import PlaceOrder from './screens/PlaceOrder'
import Order from './screens/Order'
import MyOrders from './screens/MyOrders'
import OrderList from './screens/OrderList'
import UserList from './screens/UserList'
import UserEdit from './screens/UserEdit'
import ProductList from './screens/ProductList'
import ProductEdit from './screens/ProductEdit'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/order/:id' component={Order} />
      <Route path='/myorders' component={MyOrders} />
      <Route path='/shipping' component={Shipping} />
      <Route path='/placeorder' component={PlaceOrder} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
      <Route path='/admin/orderlist' component={OrderList} />
      <Route path='/admin/userlist' component={UserList} />
      <Route path='/admin/user/:id/edit' component={UserEdit} />
      <Route path='/admin/product/create' component={CreateProduct} />
      <Route path='/product/:id' component={Product} />
      <Route path='/admin/productlist' component={ProductList} exact />
      <Route
        path='/admin/productlist/:pageNumber'
        component={ProductList}
        exact
      />
      <Route path='/admin/product/:id/edit' component={ProductEdit} />

      <Route path='/cart/:id?' component={Cart} />
      <Route path='/search/:keyword' component={Home} exact />
      <Route path='/page/:pageNumber' component={Home} exact />
      <Route path='/search/:keyword/page/:pageNumber' component={Home} exact />
      <Route path='/category/:category' component={Home} exact />
      <Route path='/' component={Home} exact />
    </BrowserRouter>
  )
}

export default App
