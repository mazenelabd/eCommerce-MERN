import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Alerts from '../components/Alerts'
import PaginationBar from '../components/PaginationBar'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

const Home = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    console.log('some')
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <ThemeProvider theme={theme}>
      {!keyword ? (
        <h1 style={{ textAlign: 'center' }}>home panel will go here</h1>
      ) : (
        <Link
          underline='none'
          component={RouterLink}
          to='/'
          variant='h5'
          sx={{ color: '#171717', ml: '5%', mt: 3, display: 'block' }}
        >
          <ArrowBackIosNewIcon sx={{ mb: -0.5 }} /> Go Back
        </Link>
      )}
      {loading ? (
        <Loader loading={loading} />
      ) : error ? (
        <Alerts severity='error' message={error} />
      ) : (
        <>
          <Grid container my={2} rowSpacing={2} justifyContent='center'>
            {products.map((product) => (
              <Grid item xxs={12} xs={6} sm={4} md={3} lg={2} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          <PaginationBar
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </ThemeProvider>
  )
}

export default Home
