import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'

const theme = createTheme({
  palette: {
    primary: {
      main: '#171717',
    },
  },
})

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={0}
        mt={2}
        sx={{
          width: { xs: '95%', sm: '70%', md: '50%', lg: '30%' },
          mx: 'auto',
        }}
      >
        <Typography variant='h5' sx={{ fontFamily: 'Playfair Display' }}>
          Register
        </Typography>
        <Box component='form' onSubmit={handleSubmit}>
          <TextField
            id='outlined-name-input'
            onChange={(e) => setName(e.target.value)}
            value={name}
            label='Name'
            type='name'
            sx={{ my: 2 }}
            fullWidth
            autoFocus
          />

          <TextField
            id='outlined-email-input'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label='Email Address'
            type='email'
            autoComplete='current-password'
            sx={{ mb: 2 }}
            fullWidth
          />

          <PasswordInput
            password={password}
            showPassword={showPassword}
            setPassword={setPassword}
            handleClickShowPassword={handleClickShowPassword}
            value='Password'
          />

          <PasswordInput
            password={confirmPassword}
            showPassword={showPassword}
            setPassword={setConfirmPassword}
            handleClickShowPassword={handleClickShowPassword}
            value='Confirm Password'
          />

          <Button
            variant='contained'
            sx={{
              display: 'flex',
              mx: 'auto',
              mt: 2,
            }}
            type='submit'
          >
            REGISTER
          </Button>
        </Box>
        <Typography variant='body2' my={2}>
          Already Have an Account?{'   '}
          <Link
            variant='body1'
            underline='none'
            component={RouterLink}
            to='/login'
            sx={{ fontWeight: 'bold' }}
          >
            Login
          </Link>
        </Typography>
      </Stack>
    </ThemeProvider>
  )
}

export default Register
