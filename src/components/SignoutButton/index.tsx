import * as React from "react";

import MenuItem from '@material-ui/core/MenuItem';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { auth } from "../../firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

export const SignOutButton = () => {

    const classes = useStyles();

    return (
        <MenuItem  color="primary" className={classes.button}  onClick={auth.doSignOut}>
            Signout
        </MenuItem>
    );
  
};