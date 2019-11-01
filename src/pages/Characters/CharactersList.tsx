import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

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
      height:210,
      pointerEvents: "painted"
    },
    name: {
      fontSize: 14,
      paddingLeft: 5,
    },
    control: {
      padding: theme.spacing(2),
    },
    loading: {
      marginLeft: '48%',
      marginTop: '10%'
    }
  }),
);

const CharactersList = ({ characters }: Characters) => {
  
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          {!characters.length ? (
            <CircularProgress className={classes.loading} size={100} />
            ) : (
            <Grid container justify="center" spacing={3}>
              {characters.map((character: any) => (
                <Grid key={character} item>
                  <Paper className={classes.paper}>
                    <Link to={`/character/${character.id}`} >
                      <img
                            src={ character.thumbnail.path +'.'+ character.thumbnail.extension} 
                            className={classes.thumb} alt=""
                      />
                    </Link>
                    <span className={classes.name}>{ character.name }</span>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CharactersList;