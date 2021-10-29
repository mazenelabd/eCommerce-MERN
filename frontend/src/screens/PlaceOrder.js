import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alerts from '../components/Alerts'
import Loader from '../components/Loader'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/system/Box'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

const theme = createTheme({
  palette: {
    primary: {
      main: '#171717',
    },
  },
})

const PlaceOrder = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error, loading } = orderCreate

  useEffect(() => {
    if (!cart.shippingAddress.address || !cart.paymentMethod) {
      history.push('/shipping')
    }
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [history, success, cart])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm'>
        <Typography variant='h6' mt={2} sx={{ fontFamily: 'Playfair Display' }}>
          Shipping Address
        </Typography>
        <Typography variant='body1' color='text.secondary' mb={2}>
          {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
          {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
        </Typography>
        <Divider />
        <Typography variant='h6' mt={2} sx={{ fontFamily: 'Playfair Display' }}>
          Payment Method
        </Typography>
        <Typography variant='body1' color='text.secondary' mb={2}>
          {cart.paymentMethod}
        </Typography>
        <Divider />
        <Typography variant='h6' mt={2} sx={{ fontFamily: 'Playfair Display' }}>
          Order Items
        </Typography>
        {cart.cartItems.length === 0 ? (
          <Alerts severity='info' message='Your cart is empty' />
        ) : (
          cart.cartItems.map((item, index) => (
            <div key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 2,
                }}
              >
                <Box
                  component='img'
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                  sx={{
                    maxHeight: '40px',
                    maxWidth: '40px',
                    mr: 1,
                  }}
                ></Box>
                <Link
                  underline='none'
                  component={RouterLink}
                  to={`/product/${item.product}`}
                  variant='body2'
                  sx={{
                    color: '#171717',
                    fontWeight: 'bold',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    mr: 'auto',
                    width: { xs: '70px', sm: '150px', md: '200px' },
                  }}
                  title={item.name}
                >
                  {item.name}
                </Link>
                <Typography
                  variant='body2'
                  sx={{ color: '#171717', fontWeight: 'bold' }}
                >
                  {item.qty} x ${item.price} = ${item.qty * item.price}
                </Typography>
              </Box>
              <Divider />
            </div>
          ))
        )}
        {cart.cartItems.length !== 0 && (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                my: 1,
              }}
            >
              <Typography variant='body2'>Items:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                ${cart.itemsPrice}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                my: 1,
              }}
            >
              <Typography variant='body2'>Shipping:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                ${cart.shippingPrice}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                my: 1,
              }}
            >
              <Typography variant='body2'>Tax:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                ${cart.taxPrice}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                my: 2,
              }}
            >
              <Typography
                variant='h6'
                sx={{ fontWeight: 'bold', fontFamily: 'Playfair Display' }}
              >
                Total:
              </Typography>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                ${cart.totalPrice}
              </Typography>
            </Box>
            <Divider />
            {loading && <Loader />}
            {error && <Alerts message={error} severity='error' />}
            <Button
              variant='contained'
              type='button'
              sx={{
                display: 'flex',
                mx: 'auto',
                my: 2,
              }}
              disabled={cart.cartItems === 0}
              onClick={placeOrderHandler}
            >
              Place Order
            </Button>
          </>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default PlaceOrder
