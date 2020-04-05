import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

export default function NavBar(props) {

    const useStyles = makeStyles(theme => {
        return ({
            root: {
                flexGrow: 1,
                overflow: 'hidden',
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
            },
            titleLinkWrapper: {
                display: 'flex',
                flexGrow: 1
            },
            titleLink: {
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                [theme.breakpoints.down('xs')]: {
                    '& strong': {
                        display: 'none'
                    }
                }
            },
            title: {
                flexGrow: 1,
                marginLeft: '10px',
                fontWeight: 100,
                '& strong': {
                    fontWeight: 700
                }
            },
            toolBar: {
                [theme.breakpoints.up('sm')]: {
                    paddingLeft: '16px',
                    paddingRight: '16px'
                }
            },
            button: {
                transition: '.2s all ease',
                textTransform: 'none',
                borderRadius: 0,
                lineHeight: 4.3,
                padding: '0 16px',
                position: 'relative',
                opacity: '.5',
                fontWeight: 'bold',
                '&:after': {
                    transition: '.2s all ease',
                    height: 0,
                    position: 'absolute',
                    content: '""',
                    width: 'calc(100% - 32px)',
                    bottom: '-1px',
                },
                '&:hover': {
                    opacity: 1,
                    background: 'none'
                }
            },
            listItem: {
                opacity: '.7'
            },
            active: {
                opacity: 1,
                '&:after': {
                    background: theme.palette.primary.main,
                    height: '5px',
                },
                '&:hover': {
                    background: 'none'
                },
                '&:hover:after': {
                    width: '100%'
                }
            },
            list: {
                width: 'auto'
            }
        });
    });

    const classes = useStyles();
    const location = useLocation();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.toolBar}>
                <div className={classes.titleLinkWrapper}>
                    <NavLink to="/" className={classes.titleLink}>
                        <img alt="Logo" height="50" src="/logo.svg" />
                    </NavLink>
                </div>
                <NavLink to="/characters">
                    <Button className={`${classes.button} ${location.pathname.includes('/characters') && classes.active}` }>Characters</Button>
                </NavLink>
                <NavLink to="/episodes">
                    <Button className={`${classes.button} ${location.pathname.includes('/episodes') && classes.active}`}>Episodes</Button>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}