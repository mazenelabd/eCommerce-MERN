import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alerts from '../components/Alerts'
import Loader from '../components/Loader'
import PaginationBar from '../components/PaginationBar'
import { listProducts, deleteProduct } from '../actions/productActions'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
})

const ProductList = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    } else {
      dispatch(listProducts('', pageNumber))
    }
  }, [dispatch, history, userInfo, successDelete, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <Typography
          variant='h5'
          sx={{ fontFamily: 'Playfair Display', textAlign: 'center', my: 2 }}
        >
          PRODUCTS
        </Typography>
        <Link
          component={RouterLink}
          underline='none'
          to={`/admin/product/create`}
        >
          <Button
            sx={{ mb: 2, ml: 'auto', display: 'flex' }}
            variant='contained'
            color='neutral'
          >
            + NEW PRODUCT
          </Button>
        </Link>
        {loadingDelete && <Loader />}
        {errorDelete && <Alerts severity='error' message={errorDelete} />}

        {loading ? (
          <Loader />
        ) : error ? (
          <Alerts severity='error' message={error} />
        ) : (
          <>
            <TableContainer sx={{ my: 2 }} component={Paper}>
              <Table aria-label='users table'>
                <TableHead>
                  <TableRow>
                    <TableCell color='text.secondary'>ID</TableCell>
                    <TableCell align='right' color='text.secondary'>
                      NAME
                    </TableCell>
                    <TableCell align='right' color='text.secondary'>
                      PRICE
                    </TableCell>
                    <TableCell align='right' color='text.secondary'>
                      CATEGORY
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow
                      key={product._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        title={product._id}
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: {
                            xs: '25px',
                            sm: '25px',
                            md: '150px',
                            lg: '200px',
                          },
                        }}
                      >
                        {product._id}
                      </TableCell>
                      <TableCell
                        align='right'
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: {
                            xs: '25px',
                            sm: '25px',
                            md: '150px',
                            lg: '200px',
                          },
                        }}
                      >
                        {product.name}
                      </TableCell>
                      <TableCell align='right'>${product.price}</TableCell>
                      <TableCell align='right'>
                        {product.category.name}
                      </TableCell>

                      <TableCell align='right'>
                        <Link
                          component={RouterLink}
                          underline='none'
                          to={`/admin/product/${product._id}/edit`}
                        >
                          <Button size='small'>
                            <AppRegistrationIcon />
                          </Button>
                        </Link>
                        <Button
                          aria-label='delete product'
                          onClick={() => deleteHandler(product._id)}
                          color='error'
                          size='small'
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <PaginationBar pages={pages} page={page} isAdmin={true} />
          </>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default ProductList
