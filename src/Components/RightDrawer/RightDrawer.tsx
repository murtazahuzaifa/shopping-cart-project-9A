import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import DeleteForeverRounded from '@material-ui/icons/DeleteForeverRounded';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer, closeDrawer, isRightDrawerOpen } from '../../ReduxStore/rightDrawerSlice';
import { removeFromCart, cartProductList } from '../../ReduxStore/cartListSlice';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    avatar: {
        margin: "0 10px",
    },
    listItem: {
        borderBottom: '1px solid black',
    },
    totalAmount: {
        margin: '30px 0px',
    },
    quantity: {
        marginLeft: "10px",
    }
});

const RightDrawer: React.FC = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const isOpen = useSelector(isRightDrawerOpen);
    const cartList = useSelector(cartProductList);
    const totalPrice: number = cartList.map(obj => obj.price * obj.quanity ).reduce((a: number, b: number) => (a + b), 0)

    // if there is no product in cart and total price is 0 close the right drawer
    useEffect(()=>{ if(totalPrice < 1){dispatch(closeDrawer())} }, [totalPrice, dispatch])

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if (open) { dispatch(openDrawer()) }
        else { dispatch(closeDrawer()) }
    };

    return (
        <div >
            <SwipeableDrawer
                anchor={"right"}
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <List>
                    {cartList.map((prod, index) => (
                        <ListItem key={index}  >
                            <Avatar alt={prod.name} src={prod.imgSrc} className={classes.avatar} ></Avatar>
                            <ListItemText primary={`${prod.name} `} secondary={`${prod.price}/- PKR`} className={classes.listItem} />
                            <Typography className={classes.quantity} variant='caption'>X{prod.quanity}</Typography>
                            <IconButton onClick={() => { dispatch(removeFromCart(prod.id)) }}> <DeleteForeverRounded /> </IconButton>
                        </ListItem>
                    ))}
                    <ListItem><ListItemText primary={'Total'} className={classes.totalAmount} />
                        <Typography variant='h6' color='textPrimary'>
                            <CountUp start={0} end={totalPrice} duration={1} separator="," />/- PKR
                        </Typography>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </div>
    );
}

export default RightDrawer;