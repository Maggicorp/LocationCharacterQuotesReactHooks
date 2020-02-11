import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Uses material UI to style text boxes of varying sizes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Content = ({ content, selected }) => {
  const classes = useStyles();
  const contentFilteredBySelectedTag = content.filter(item => selected.includes(item.tag))

  return (
    <div className={classes.root}>
      {contentFilteredBySelectedTag === [] && <div>Please select a tag to display data </div>}
      <Grid container spacing={3}>
        {contentFilteredBySelectedTag.map((item, index) => <Grid item key={`GridItem${index}`}><Paper className={classes.paper} key={`${item.tag}${item.content}${index}`}>{item.content}</Paper></Grid>)}
      </Grid>
    </div>)
}

export default Content;
