import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MoreIcon from '@mui/icons-material/MoreVert'
import Logout from '@mui/icons-material/Logout'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#c9c9c9',
  '&:hover': {
    color: 'white',
  },
  '&:focus': {
    color: 'white',
  },
}))
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      keepMounted
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: { xs: 10.5, sm: 7.5 },
          '& .css-i4bv87-MuiSvgIcon-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
        >
          <AccountCircle />
        </ListItemIcon>
        Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon aria-label='logout'>
          <Logout fontSize='small' />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      id={mobileMenuId}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      onClick={handleMobileMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: { xs: 10.5, sm: 7.5 },
          '& .css-i4bv87-MuiSvgIcon-root': {
            width: 32,
            height: 32,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <ListItemIcon aria-label='show 4 cart items'>
          <Badge
            badgeContent={4}
            color='error'
            position='fixed'
            ml='-0.5'
            mr='1'
          >
            <ShoppingCartIcon />
          </Badge>
        </ListItemIcon>
        Cart
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <ListItemIcon
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
        >
          <AccountCircle />
        </ListItemIcon>
        Profile
      </MenuItem>
    </Menu>
  )

  return (
    <>
      <Link
        variant='h6'
        underline='none'
        component={RouterLink}
        to='/'
        sx={{
          backgroundColor: '#171717',
          color: '#c9c9c9',
          '&:hover': {
            color: 'white',
          },
          '&:active': {
            color: 'white',
          },
          '&:focus': {
            color: 'white',
          },
          mx: 'auto',
          justifyContent: 'center',
          display: { xs: 'flex', sm: 'none' },
          fontFamily: 'Playfair Display',
        }}
      >
        TAYLOR FANS
      </Link>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          sx={{ backgroundColor: '#171717', color: '#f5f5f7' }}
        >
          <Toolbar>
            <StyledIconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open category drawer'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </StyledIconButton>
            <Link
              variant='h6'
              underline='none'
              component={RouterLink}
              to='/'
              noWrap
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontFamily: 'Playfair Display',
                color: '#c9c9c9',
                '&:hover': {
                  color: 'white',
                },
                '&:active': {
                  color: 'white',
                },
                '&:focus': {
                  color: 'white',
                },
              }}
              style={{ flex: 1 }}
            >
              TAYLOR FANS
            </Link>
            <Search sx={{ width: { xs: '100%', sm: '50%', md: '25%' } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <StyledIconButton
                size='large'
                aria-label='show 4 cart items'
                color='inherit'
              >
                <Badge badgeContent={4} color='error'>
                  <ShoppingCartIcon />
                </Badge>
              </StyledIconButton>
              <StyledIconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
              >
                <AccountCircle />
              </StyledIconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <StyledIconButton
                size='large'
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </StyledIconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  )
}

export default Header
