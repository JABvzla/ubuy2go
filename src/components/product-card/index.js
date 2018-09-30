import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SvgIcon from '@material-ui/core/SvgIcon';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: 300,
        height: 350,
    },
    media: {
    },
};

class ProductCard extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
            Product Name
                    </Typography>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        image="https://via.placeholder.com/300x300"
                        title="Product"
                    />
                    <Typography component="p">
            $200
                    </Typography>
                    <Typography component="p">
            Product description product description product description product description
                    </Typography>

                    <BottomNavigationAction
                        label="Recents"
                        icon={(
                            <IconButton aria-label="Delete">
                                <SvgIcon>
                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                                </SvgIcon>
                            </IconButton>
                        )}
                    />
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(ProductCard);
