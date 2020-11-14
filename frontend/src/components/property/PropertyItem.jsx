import React from 'react';
import "./PropertyItem.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { findNonSerializableValue } from '@reduxjs/toolkit';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    "&:hover": {
        transform: "scale(1.03)",
        transitionTimingFunction: "ease"
      },
      transition:"0.3s"
  },
  link: {
      textDecoration: "none",
  }
});

function PropertyItem({name}) {
  const classes = useStyles();

  return (
      <Link className={classes.link} to="/property">
        <Card className={classes.root} style={{boxShadow: " 0 30px 50px -14px rgba(0,0,0,0.25)"}}>
        <CardActionArea to="/">
            <CardMedia  
            component="img"
            alt="Contemplative Reptile"
            height="224"
            image="https://cdn.cnn.com/cnnnext/dam/assets/200211140555-09-dubai-buildings.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {name}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6} >
                        <Typography variant="body2" color="textSecondary" component="p">
                            Token Price: 
                        </Typography>
                </Grid>
                <Grid item xs={6} >
                    120 $
                </Grid>
                    
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={6} >
                        <Typography variant="body2" color="textSecondary" component="p">
                            Total Tokens: 
                        </Typography>
                </Grid>
                <Grid item xs={6} >
                    500
                </Grid>
                    
            </Grid>

            
            </CardContent>
            <CardContent style={{backgroundColor:"#00cccc", height:"auto", color:"white", padding:"12px"}}>
                
                <Typography variant="caption"> 
                    Token Price
                </Typography>
                <Typography variant="h5" style={{fontWeight:"bold"}} > 
                    0.12 ETH
                </Typography>
            </CardContent>
        </CardActionArea>
        {/* <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions> */}
        </Card>
    </Link>
  );
};

export default PropertyItem;

