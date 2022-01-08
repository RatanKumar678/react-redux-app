import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ProductTile from './Product-tile'

const Media = (props) => {
  const { data = [] } = props;

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
        { data ? data.map((item, index) => (
            <Grid item xs={12} sm={4} md={3} key={index}>
                <ProductTile item={item} index={index}/>
            </Grid>
        )) : 'NO Data Found'}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default Media;