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

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      >
        <Typography variant='h5' sx={{ fontFamily: 'Playfair Display' }}>
          LOGIN
        </Typography>
        <Box component='form' onSubmit={handleSubmit}>
          <TextField
            id='outlined-email-input'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label='Email Address'
            type='email'
            autoComplete='current-password'
            sx={{ my: 2 }}
            fullWidth
            autoFocus
          />

          <PasswordInput
            password={password}
            showPassword={showPassword}
            setPassword={setPassword}
            handleClickShowPassword={handleClickShowPassword}
            value='Password'
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
            LOGIN
          </Button>
        </Box>
        <Typography variant='body2' my={2}>
          Not a User?{'   '}
          <Link
            underline='none'
            component={RouterLink}
            to='/register'
            sx={{ fontWeight: 'bold' }}
            variant='body1'
          >
            Register
          </Link>
        </Typography>
      </Stack>
    </ThemeProvider>
  )
}

export default Login
