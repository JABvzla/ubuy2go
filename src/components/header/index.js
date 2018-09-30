import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    top: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'space-around',
        paddingTop: theme.spacing.unit * 10,
        root: {
            border: 'none',
        },
    },
    sticky: {
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14)',
    },
    title: {
        fontFamily: 'Pattaya',
        margin: '0 auto',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 650,
            margin: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
});

class PrimarySearchAppBar extends React.PureComponent {
    render() {
        const { classes } = this.props;

        return ([
            <AppBar key={0} position="relative" className={classes.top}>
                <Typography className={classes.title} variant="display3" color="inherit">
                    uBuy2Go
                </Typography>
            </AppBar>,
            <AppBar key={1} position="sticky" classes={{ positionSticky: classes.sticky }}>
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <Input
                            placeholder="Search…"
                            disableUnderline
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>,
        ]);
    }
}

export default withStyles(styles)(PrimarySearchAppBar);
