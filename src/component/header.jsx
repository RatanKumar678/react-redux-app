import React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Cart from './cart';

import { connect } from 'react-redux';
import { fetchSearchTerm } from '../actions'
import HomeIcon from '@mui/icons-material/Home';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: { xs: 0, sm: 2 } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <Link to="/" className="product-logo">PRODUCT</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' },mr: { xs: 2, sm: 0 } }}>
            <Typography
              noWrap
              variant="h6"
              component="div"
            >
            <Link to="/" className="product-logo">
              <IconButton
                  size="large"
                  color="inherit"
                >
                  <HomeIcon />
                </IconButton>
            </Link>
            </Typography>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              onChange={e => props.fetchSearchTerm(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Cart />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default connect(
  null,
  {fetchSearchTerm}
)(Header);