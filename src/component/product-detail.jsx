import React, {useState} from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Tooter from './tooter';
import { fetchCartData } from '../actions'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link  as RouteLink} from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';

const ProductDetail = (props) => {
    const {item} = props;

    const [open, setOpen] = useState(false);
    const [mainImage, setMainImage] = useState(item?.src);

    const addToCart = (item) => {
        props.fetchCartData(item);
        setOpen(true);
    }

    if(!item) {
        return 'No seleted item';
    }

    const changeMainImage = (src) => {
        setMainImage(src)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{mb:2}}>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                >
                    <RouteLink to="/" className="routeLink-custom">
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        <span fontSize="inherit">Home</span>
                    </RouteLink>
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Product Detail
                </Typography>
            </Breadcrumbs>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4} className="product-detail-image-section">
                    <div className="product-image mainImage-section" style={ {backgroundImage: `url(${mainImage})`}}></div>
                    <ImageList cols={item?.images.length}>
                        {item?.images.map((data) => (
                            <ImageListItem>
                                <img
                                    src={data?.src}
                                    alt="data URL"
                                    loading="lazy"
                                    style={{cursor: 'pointer'}}
                                    onMouseEnter={()=> changeMainImage(data?.src)}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Box sx={{ my: 3, mx: 2 }} className="detail-box">
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography gutterBottom variant="h4" component="div" className="detail-box-Typography">
                                        {item?.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary" variant="body2">
                                Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                                just down the hall.lue cotton blouse takes you on a walk to the park or
                                just down the hall.

                                Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                                just down the hall.
                            </Typography>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="stretch"
                            >
                                <Grid item>
                                    <Typography sx={{ mt: 2 }} component="legend">Rating</Typography>
                                    <Rating name="read-only" value={item?.rating} precision={0.5} readOnly />
                                </Grid>
                                <Grid item style={{alignItems: 'center',display: 'flex'}}>
                                    <Typography gutterBottom variant="h6" component="div" style={{paddingTop: '1.6rem'}}>
                                        <Chip label={`$ ${item?.price}`} className="price-tag"/>
                                        <span class="vip-eff-price-disc">(24% off) </span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider variant="middle" />
                        <Box sx={{ m: 2 }} className="detail-box">
                            <Typography variant="caption" color="text.secondary">
                            <div className="product-dis">
                                <div className="product-dis-key">Material</div>
                                <div className="product-dis-value">{item?.material}</div>
                            </div>
                            <div className="product-dis">
                                <div className="product-dis-key">Material</div>
                                <div className="product-dis-value">{item?.material}</div>
                            </div>
                            <div className="product-dis">
                                <div className="product-dis-key">Item dimensions</div>
                                <div className="product-dis-value">{item?.dimensions}</div>
                            </div>
                            <div className="product-dis">
                                <div className="product-dis-key">Furniture Finish</div>
                                <div className="product-dis-value">{item?.furniture_finish}</div>
                            </div>
                            <div className="product-dis">
                                <div className="product-dis-key">Item Weight</div>
                                <div className="product-dis-value">{item?.weight}</div>
                            </div>
                        </Typography>
                        </Box>
                        <Divider variant="middle" />
                        <Box sx={{ m: 2 }} className="detail-box">
                            <Typography gutterBottom variant="body1">
                                Options To Buy:
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip label="On EMI" />
                                <Chip label="COD" />
                                <Chip label="Credit card" />
                                <Chip label="Net banking" />
                            </Stack>
                        </Box>
                        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                            <Button variant="outlined" onClick={ () => addToCart(item) }>Add to cart</Button>
                            <Button variant="contained" sx={{ ml: 2 }}>Buy Now</Button>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
            <Tooter openToster={open}/>
        </Box>
    );
}

const mapStateToProps = state => {
    return { item: state.selectedItem };
}

export default connect(mapStateToProps,{fetchCartData})(ProductDetail);
