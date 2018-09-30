import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './amazonIcon.css';

const styles = theme => ({
    root: {
        margin: theme.spacing.unit,
    },
    card: {
        width: 300,
        height: 415,
        paddingTop: theme.spacing.unit,
        transition: 'background-color 0.5s ease',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.01),
        },
    },
    media: {
        height: 200,
    },
    price: {
        margin: theme.spacing.unit,
        marginLeft: 0,
    },
});

class ProductCard extends React.PureComponent {
    constructor(props) {
        super(props);

        this.navigate = this.navigate.bind(this);
    }

    navigate() {
        window.open('https://google.com', '_blank');
    }

    render() {
        const { classes } = this.props;

        return (
            <ButtonBase
                focusRipple
                className={classes.root}
                onClick={this.navigate}
            >
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="headline" align="center">
                            {this.props.title}
                        </Typography>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image="https://via.placeholder.com/300x300"
                            title="Product"
                        />
                        <Typography component="p" variant="display1" className={classes.price}>
                            {`$${this.props.price}`}
                        </Typography>
                        <Typography component="p" variant="caption">
                            {this.props.description}
                        </Typography>
                        <div className="icon-amazon" />
                    </CardContent>
                </Card>

            </ButtonBase>
        );
    }
}

export default withStyles(styles)(ProductCard);
