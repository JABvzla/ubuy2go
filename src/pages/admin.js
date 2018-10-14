import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Actions from '../redux/actions';
import withRoot from '../withRoot';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 10,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    card: {
        height: theme.spacing.unit * 42,
        width: theme.spacing.unit * 50,
        padding: theme.spacing.unit * 2,
        outline: 'none',
    },
    cardActions: { display: 'flex', justifyContent: 'center' },
});

class Admin extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: 'joseantoniobonito@hotmail.com',
            password: '5711948',
            showPassword: false,
        };

        this.onLogin = this.onLogin.bind(this);
        this.onClickShowPassword = this.onClickShowPassword.bind(this);
    }

    onLogin() {
        this.props.login(this.state.email, this.state.password);
    }

    onClickShowPassword() {
        this.setState(prevState => ({ showPassword: !prevState.showPassword }));
    }

    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        // TODO fix this warn.
        if (this.props.isAdmin) {
            this.props.history.push('/');
        }

        return (
            <div>
                <Modal
                    open
                    disableAutoFocus
                    onClose={this.handleClose}
                    className={classes.root}
                >
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" variant="headline" gutterBottom>Login</Typography>
                            <TextField
                                label="User"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange('email')}
                                value={this.state.email}
                            />
                            <TextField
                                type={this.state.showPassword ? 'text' : 'password'}
                                label="Password"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.onClickShowPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Button variant="outlined" color="primary" onClick={this.onLogin}>Entrar</Button>
                        </CardActions>
                    </Card>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAdmin: state.isAdmin,
});

const mapDispatchToProps = () => ({
    login: (email, password) => Actions.login(email, password),
});


export default withRoot(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Admin)));
