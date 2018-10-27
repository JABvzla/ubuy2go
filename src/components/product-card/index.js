import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Edit';

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
    actions: {
        justifyContent: 'flex-end',
        backgroundColor: '#eee',
        position: 'relative',
        top: '-44px',
        width: '303px',
        margin: 'auto',
        borderRadius: '0px 0px 7px 7px',
    },
    deleteIcon: {
        color: '#c44',
    },
    updateIcon: {
        color: '#44c',
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
        window.open(this.props.link ? this.props.link : 'https://google.com', '_blank');
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <ButtonBase
                    focusRipple
                    className={classes.root}
                    onClick={this.navigate}
                >
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom variant="headline" align="center">
                                {this.props.title}
                                {this.props.key}
                            </Typography>

                            <CardMedia
                                component="img"
                                className={classes.media}
                                image={this.props.image}
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
                <div
                    className={classes.actions}
                    style={{ display: this.props.isAdmin ? 'flex' : 'none' }}
                >
                    <IconButton className={classes.updateIcon} onClick={this.props.onUpdateClick}>
                        <UpdateIcon />
                    </IconButton>
                    <IconButton className={classes.deleteIcon} onClick={this.props.onDeleteClick}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ProductCard);
