import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Character({ character }) {
    const classes = useStyles();
    const {name, image, status, species } = character;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    height="400"
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>Status:</strong> {status} <br/>
                        <strong>Species:</strong> {species} <br/>
                        <strong>Location:</strong> {origin.name} <br/>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}