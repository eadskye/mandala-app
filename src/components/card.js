import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';




const CardExampleWithAvatar = () => (
  <Card
    overlay
    >
    <CardHeader
      overlay={<CardTitle title="Mandala"  />}

    />
    <CardMedia
      overlay={<CardTitle title="Mandala" />}


/>
      <CardActions>
        <FlatButton label="Login" />
      <FlatButton label="About" />

    </CardActions>



  </Card>
);



export default CardExampleWithAvatar;
