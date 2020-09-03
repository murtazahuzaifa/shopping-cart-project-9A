import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { ShoeType } from '../../Types/Types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../ReduxStore/cartListSlice';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    paddingTop: '100%',
  },
  cardAction: {
    justifyContent: "center",
    // float:''
  }
});

const ProductCard: React.FC<ShoeType> = ({ id, name, imgSrc, price }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h6" align='center'>
            {name}
          </Typography>
          <Typography variant="h6" component="h6" align='center'>
            {price}/- PKR
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary" onClick={() => { dispatch(addToCart({ id:id, name:name, imgSrc:imgSrc, price:price })) }} >
          <AddShoppingCart />
          Add TO Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;