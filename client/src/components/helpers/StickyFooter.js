import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '40vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <CssBaseline />
        <footer className={classes.footer}>
          <Divider light/>
          <br/>
          <Container maxWidth="xs">
            <Typography variant="body1" color="textSecondary"
                        aria-label={"Accessibility Learning Labs Footer"}>
              <Link color="inherit" onClick={() => window.open("http://all.rit.edu","_blank")} tabIndex={"0"} aria-label={"Accessibility Learning Labs"}>
                Accessibility Learning Labs
              </Link>
            </Typography>
          </Container>
        </footer>
      </div>
  );
}