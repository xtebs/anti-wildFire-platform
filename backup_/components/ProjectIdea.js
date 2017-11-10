import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


export default function SimpleMediaCard(props) {
  
  return (
    <div style={{padding:5}}>
      <Card style={{heigh:400, width:300 }}>
        <CardMedia style={{ padding:120}}
          image={props.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2" style={{color:"gray"}}>
            {props.descript1}
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}



