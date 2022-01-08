import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button , IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { connect } from 'react-redux';
import { fetchCartData,fetchSelectedProduct } from '../actions'
import Tooter from './tooter';

const ProductTile = (props) => {
    const {item,index} = props;

    const [open, setOpen] = React.useState(false);

    const addToCart = (item) => {
        props.fetchCartData(item);
        setOpen(true);
    }

    const viewProduct = (item) => {
        props.fetchSelectedProduct(item);
    }

    return (
        <Card variant="outlined" className={`product-section ${ !item.in_stock ? 'sold-out-wrapper' : ''}`}>
            <Box key={index} onClick={ () => viewProduct(item) }>
                <Link to="/Product-detail" >
                    <Tooltip title="View Detail">
                        <div className="product-image" style={ {backgroundImage: `url(${item.src})`}}>
                            <div className="product-rating">
                            <span>{item.rating}</span>
                            </div>
                        </div>
                    </Tooltip>
                </Link>
                <div className="add-to-cart-button">
                    <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={ () => addToCart(item) } >
                        Add to Cart
                    </Button>
                </div>
                <Box sx={{ p: 1 }}>
                    <Typography gutterBottom variant="body1">
                        <p className="product-name">
                        {item.title}
                        <span>{item.brand}</span>
                        </p>
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                    <span className="product-off">45% Off</span>
                    </Typography>
                    <Typography variant="caption">
                        <div className="product-dis price-section">
                            <div className="product-dis-price">
                                $ {item.price} 
                                <span className="product-dis-price-mrp">
                                ₹ 14,999
                                </span>
                            </div>
                            <div className="product-dis-total">
                            <IconButton aria-label="delete" disabled>
                                <RemoveIcon />
                            </IconButton>
                                <div className="count"> 0 </div>
                            <IconButton aria-label="delete" disabled>
                                <AddIcon />
                            </IconButton>
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Box>
            <Tooter openToster={open}/>
        </Card>
    );
}

export default connect(
    null,
    {fetchCartData,fetchSelectedProduct}
)(ProductTile);