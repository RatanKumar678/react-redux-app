import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import Media from './media';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

class ProductList extends Component {

  componentDidMount() {
      this.props.fetchProducts();
  }

  filteredData = () => {
    if(!this.props.term) {
      return this.props.products;
    } else {
      return (
        this.props.products.filter(ele => {
          const currentItem = ele.title.toLocaleLowerCase();
          const searchTerm = this.props.term.toLocaleLowerCase();
          return currentItem.includes(searchTerm);
        })
      );
    };
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{mb:2}}>\
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    <span fontSize="inherit">Home</span>
                </Typography>
            </Breadcrumbs>
        <Media data={this.filteredData()}/>
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    term: state.searchTerm,
  };
}

export default connect(mapStateToProps,{ fetchProducts })(ProductList);
