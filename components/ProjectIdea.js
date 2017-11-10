import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


export default function SimpleMediaCard(props) {
  
  return (
    <div style={{padding:10 , minHeight:600}}>
      <Card style={{heigh:"25%", width:300 }}>
        <CardMedia style={{ padding:120}}
          image={props.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2" style={{fontSize:"2em",color:"gray"}}>
            {props.title}
          </Typography>
          <Typography component="p">
            {props.descript_full}
          </Typography>
        </CardContent>
       {/*  <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
	   </CardActions> */}
      </Card>
    </div>
  );
}


