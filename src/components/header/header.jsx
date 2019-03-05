import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit" className={classes.grow}>
                        Frai.dev
                    </Typography>
                    <Button color="inherit" href="https://www.linkedin.com/in/fraifelipe/">Linkedin</Button>
                    <Button color="inherit" href="https://twitter.com/fraifelipe_">Twitter</Button>
                    <Button color="inherit" href="https://medium.com/@Frai">Blog</Button>
                    <Button color="inherit" href="https://github.com/fraifelipe">GitHub</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
