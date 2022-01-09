import React, {useState,useEffect} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { connect } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Cart = ({items = []}) => {
    const [menuState, setMenuState] = React.useState({right: false});
    
    const [cartUniqueItem, setCartUniqueItem] = useState([]);
    
    useEffect(() => {
        const uniqueArray = items.filter((value, index) => {
            const _value = JSON.stringify(value);
            return index === items.findIndex(obj => {
              return JSON.stringify(obj) === _value;
            });
        });

        uniqueArray.forEach(item => {
            delete item?.count;
            items.forEach(innerItem => {
                if(item.id === innerItem.id) {
                    if (item['count']) {
                        item['count'] = item['count'] + 1;
                    } else {
                        item['count'] = 1;
                    };
                }
            });
        });

        setCartUniqueItem(uniqueArray);
    },[items]);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setMenuState({ ...menuState, [anchor]: open });
    };

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
        >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <Box sx={{ my: 0, mx: 2}}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4" component="div">
                                My Cart
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" component="div">
                               Total: $ {items.reduce((sum, crnt) => sum + crnt.price, 0) }
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle" />
                { cartUniqueItem.length !== 0 ? (
                        cartUniqueItem.map((item,index) => (
                        <>  
                            <ListItem key={item.index} alignItems="center">
                                <ListItemAvatar>
                                    <Badge
                                        overlap="circular"
                                        color="success"
                                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                                        badgeContent={<span>{item.count}</span>}
                                    >
                                            <Avatar
                                                alt={item.title}
                                                src={item.src}
                                                variant="square"
                                                sx={{ width: 50, height: 65 }}
                                            />
                                        </Badge>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<span className="cart-item-title">{item.title}</span>}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                <div class="product-dis-price">$ {item.price} <span class="product-dis-price-mrp">₹ 14,999</span></div>
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    ))
                ) : (
                    <Box sx={{ my: 3, mx: 2 }}>
                            'No item added to cart'
                    </Box>
                )}
            </List>
        </Box>
    );
   
    return (
        <div>
            <IconButton
                size="large"
                color="inherit"
                style={{marginLeft: '10px'}}
                onClick={toggleDrawer('right', true)}
            >
                <Badge badgeContent={items.length} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            <Drawer
                anchor={'right'}
                open={menuState['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
            >
                {list('right')}
            </Drawer>
        </div> 
    );
}

const mapStateToProps = (state) => {
    return {items: state.cartItems}
};

export default connect(mapStateToProps)(Cart);

