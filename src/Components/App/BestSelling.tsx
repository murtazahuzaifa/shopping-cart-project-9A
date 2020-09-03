import React, { useState, useEffect } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProductCard } from '..';
import { ShoeType } from '../../Types/Types';
import {useDispatch, useSelector} from 'react-redux';
import {getBestSelling,setBestSelling} from '../../ReduxStore/shoeSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridContainer: {
        padding: theme.spacing(1),
    },
}));

function BestSelling() {
    const classes = useStyles();
    const [isLoading, setIsloading] = useState<boolean>(true);
    const dispatch  = useDispatch();
    const ShoesData = useSelector(getBestSelling);

    const fetchDataCallBack = () => {
        fetch('api/shoes/bestSelling').then(response => response.json()).then((data: ShoeType[]) => {
            dispatch(setBestSelling(data))
            setIsloading(false)
            return data
        }).catch(error => {console.log("Error in Fetching", error)} )
    }

    useEffect(fetchDataCallBack, [])

    if (!isLoading && ShoesData) {
        return (
            <Container maxWidth='lg' className={classes.root} >
                <br />
                <Typography variant='h4' component='h4' align='center' ><b>Best Selling</b></Typography>
                <hr />
                <Grid className={classes.gridContainer} container spacing={2} component='div' justify='center' wrap='wrap' >
                    {ShoesData.map((shoe: ShoeType, id: number) => (
                        <Grid key={id} container item xs={12} sm={6} md={3} justify='center' >
                            <ProductCard {...shoe} />
                        </Grid>
                    ))}
                </Grid>
            </Container >

        )
    };

    return (
        <div>Loading</div>
    )
}

export default BestSelling;
