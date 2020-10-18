import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function CustomCard(props) {
    const {
        image,
        title,
        child
    } = props
    return (
        <Card className="card-wrap">
            <div className='media'>
                <img src={image} alt="space-x"
                    onError={e => { e.target.onerror = null; e.target.src = require('../assets/images/space-x.jpg') }} />
            </div>
            <CardContent>
                <Typography gutterBottom variant="subtitle1" color="primary" className="font-weight-bold">
                    {title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="div">
                    {child}
                </Typography>
            </CardContent>

        </Card>
    );
}
