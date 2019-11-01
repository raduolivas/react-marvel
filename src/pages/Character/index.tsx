import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { characters, getCharacterUrl } from '../../services/characters'; 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginTop: 20,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    thumb: {
      width:300,
      height:330,
      pointerEvents: "painted"
    },
  }),
);

export const Character = (props: any) => {
  const [characterInfo, setCharacterInfo] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if(props.match) { 
      let { id } = props.match.match.params;
      loadCharacter(id);
    }
  }, [props.match]);

  const loadCharacter = async(id: string) => {
    setLoading(true);
    const response = await characters.get(getCharacterUrl(id));
    setCharacterInfo(response.data.data.results[0]);
    setLoading(false);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {loading ? (  <CircularProgress/>): (
               <img src={ characterInfo.thumbnail.path +'.'+ characterInfo.thumbnail.extension} 
               className={classes.thumb} alt=""/>
            )}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {loading ? (<CircularProgress/>): (
              <Container>
                <h2>{ characterInfo.name }</h2>
                Character id: <span><b>{characterInfo.id}</b></span>
              </Container>
            )}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {loading ? (<CircularProgress/>): (
              <Container>
                <h2>Character Comics</h2>
                {characterInfo.comics.items.map((comic: any) => (
                  <h5>{comic.name}</h5>
                ))}
              </Container>
            )}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {loading ? (<CircularProgress/>): (
              <Container>
                <h2>Character Stories</h2>
                {characterInfo.stories.items.map((story: any) => (
                  <h5>{story.name}</h5>
                ))}
              </Container>
            )}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {loading ? (<CircularProgress/>): (
              <Container>
                <h2>Character Series</h2>
                {characterInfo.series.items.map((serie: any) => (
                  <h5>{serie.name}</h5>
                ))}
              </Container>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};