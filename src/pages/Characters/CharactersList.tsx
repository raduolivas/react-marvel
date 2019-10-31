import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Paper from '@material-ui/core/Paper';

interface Characters {
  characters?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: 10
    },
    paper: {
      height: 240,
      width: 200,
    },
    thumb: {
      width:200,
      height:210
    },
    name: {
      fontSize: 14,
      paddingLeft: 5,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const CharactersList = ({ characters }: Characters) => {
  
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {characters.map((character: any) => (
              <Grid key={character} item>
                <Paper className={classes.paper}>
                  <img src={ character.thumbnail.path +'.'+ character.thumbnail.extension} className={classes.thumb} alt=""/>
                  <span className={classes.name}>{ character.name }</span>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CharactersList;