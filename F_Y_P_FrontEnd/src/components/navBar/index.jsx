import { AppBar, Box, Card, Container, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React, {  useState } from 'react'
import logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
const navContainer = {
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Roboto'
}
const navMenuIcon = {
  display: {
    xs: 'flex',
    sm: 'flex',
    md: 'none',
    lg: 'none'
  }
}
export default function Default() {
  let navigator = useNavigate()
  let location = useLocation()
  let routes = [
    {
      name: 'HOME',
      path: '/'
    },
    {
      name: 'Cover Letter',
      path: '/coverLetter'
    },
    {
      name: 'Portfolio Creation',
      path: '/portfolio_creation'
    },
    {
      name: 'Resume Builder',
      path: '/resumeBuilder'
    },
    {
      name: 'CONTACT US',
      path: '/contactUs'
    }
  ]
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar style={{
      backgroundColor: 'white',
      padding: '0px 10px'
    }}>
      {/* <Container style={navContainer}> */}
      <Box style={navContainer}>
        <Box>
          <img src={logo} alt='logo' style={{height:'90px'}}/>
        </Box>
        <Box sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex',
            lg: 'flex',
          },
          position: 'relative',
          fontSize: '14px'
        }}>
          {routes.map((item, index) =>
            <>
              <Box sx={{
                position: 'relative',
              }}>
                <MenuItem key={index} onClick={() => {
                  navigator(`${item.path}`)
                }} >
                  <Typography variant='h6' sx={{
                    fontSize: '14px',
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: '500',
                    textTransform:'uppercase',
                    color: location.pathname == item.path ? '#29487D' : '#979797',
                    '&:hover': {
                      color: '#29487D',
                      backgroundColor: 'transparent'
                    },
                  }} >{item.name}</Typography>
                </MenuItem>
              </Box>
            </>
          )}
          <>
              <Box sx={{
                position: 'relative',
              }}>
                <MenuItem onClick={() => {
                  localStorage.clear()
                  navigator(`/login`)
                }} >
                  <Typography variant='h6' sx={{
                    fontSize: '14px',
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: '500',
                    textTransform:'uppercase',
                    color: '#979797',
                    '&:hover': {
                      color: '#29487D',
                      backgroundColor: 'transparent'
                    },
                  }} >logout</Typography>
                </MenuItem>
              </Box>
            </>
        </Box>
        <IconButton sx={navMenuIcon}
          aria-label="menu"
          onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'none',
              lg: 'none'
            },
            marginTop: '15px',
            alignItems: 'center',
          }}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {routes.map((item, index) =>
            <MenuItem key={index} onClick={() => {
              navigator(`${item.path}`)
              setAnchorEl(null);
            }} sx={{
              fontSize: '14px',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: '500',
              textTransform:'uppercase',
              color: location.pathname == item.path ? '#29487D' : '#979797',
              '&:hover': {
                color: '#29487D',
                backgroundColor: 'transparent'
              },
            }}>{item.name}</MenuItem>
          )}
        </Menu>
      </Box>
    </AppBar>
  )
}
