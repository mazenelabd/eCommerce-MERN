import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import MailIcon from '@mui/icons-material/Mail'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../actions/categoryActions'
import Loader from './Loader'
import Alerts from './Alerts'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

const SideNav = ({ sideNav, setSideNav, isAdmin }) => {
  const dispatch = useDispatch()

  const categoryList = useSelector((state) => state.categoryList)
  const { loading, success, error, categories } = categoryList

  useEffect(() => {
    if (!loading && !success && !error) {
      dispatch(listCategories())
    }
  }, [dispatch, loading, error, success])

  const list = (
    <Box sx={{ width: 250, pt: { xs: 10, sm: 7 } }} role='presentation'>
      <List>
        {categories &&
          categories.map((category) => (
            <Link
              key={category._id}
              underline='none'
              component={RouterLink}
              to={`/category/${category._id}`}
              sx={{ color: '#171717' }}
              onClick={() => {
                setSideNav(!sideNav)
              }}
            >
              <ListItem button sx={{ width: 250, mr: 0, pr: 0 }}>
                <ListItemText
                  sx={{ textTransform: 'capitalize' }}
                  primary={category.name}
                />
                <ListItemIcon sx={{ mr: 0, pr: 0 }}>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
              </ListItem>
            </Link>
          ))}
      </List>
      {isAdmin && (
        <>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  )

  return (
    <Drawer
      anchor='left'
      open={sideNav}
      onClose={() => setSideNav(false)}
      sx={{
        width: '250',
      }}
    >
      {loading ? (
        <Loader />
      ) : error ? (
        <Alerts severity='error' message={error} />
      ) : (
        list
      )}
    </Drawer>
  )
}

SideNav.defaultProps = {
  sideNav: false,
}
export default SideNav
