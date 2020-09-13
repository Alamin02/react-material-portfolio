import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, CardActionArea, Card, Link as MaterialLink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Button from '@material-ui/core/Button';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined';
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {  useTheme } from '@material-ui/core/styles';
import Lyrics from './Lyrics';
import Birds from './Birds';

const useStyles = makeStyles((theme) => ({
  app: {
    position: 'relative',
    overflow: 'hidden',
  },
  root: {
    minHeight: '100vh',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    flex: '1 0 auto',
    flexGrow: 0,
    height: 200,
    width: 200,
    borderRadius: 150,
  },
  info: {
    flex: '1 0 auto',
    flexGrow: 0,
    marginTop: 20,
  },
  button: {
    margin: theme.spacing(3),
  },
  attibuteContainer: {
    minWidth: '50vw',
    margin: 40,
  },
  attribute: {

  },
  attributeActionArea: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  icon: {
    fontSize: 40,
  },
  uppercase: {
    textTransform: 'uppercase'
  }
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  console.log(theme);

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

  return (
    <div className={classes.app}>
      <Lyrics />
      <Birds />

      <Container>
        <Box className={classes.root}>
          <CardMedia
            className={classes.avatar}
            image={require('../../img/profile.png')}
          />

          <Box className={classes.info}>
            <Typography variant='h2'>Md. Al Amin</Typography>
            <Typography variant='h5'>Software Engineer</Typography>
            <Typography variant='subtitle1'>Loves Programming, Electronics, Music</Typography>
          </Box>

          <Box className={classes.attibuteContainer}>
            <Grid container spacing={isMobile ? 1 : 10}>
              <Grid item xs={6} sm={6} lg={3}>
                <Card>
                  <CardActionArea component={Link} to={`/career`} className={classes.attributeActionArea} >
                    <Typography>
                      <HowToRegOutlinedIcon className={classes.icon} />
                    </Typography>
                    <Typography variant='h5'>Career</Typography>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={6} sm={6} lg={3}>
                <Card>
                  <CardActionArea component={Link} to={`/projects`} className={classes.attributeActionArea}>
                    <Typography>
                      <EmojiFoodBeverageOutlinedIcon className={classes.icon} />
                    </Typography>
                    <Typography variant='h5'>Projects</Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Card>
                  <CardActionArea component={Link} to={`/academics`} className={classes.attributeActionArea}>
                    <Typography>
                      <CollectionsBookmarkOutlinedIcon
                        className={classes.icon}
                      />
                    </Typography>
                    <Typography variant='h5'>Academics</Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Card>
                  <CardActionArea component={Link} to={`/others`} className={classes.attributeActionArea}>
                    <Typography>
                      <AudiotrackOutlinedIcon className={classes.icon}  />
                    </Typography>
                    <Typography variant='h5'>Others</Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <MaterialLink href='https://github.com/Alamin02' target="_blank">
              <Button className={classes.button} startIcon={<GitHubIcon />}>
                Github
            </Button>
            </MaterialLink>
            <MaterialLink href='https://www.linkedin.com/in/alamin02/' target="_blank">
              <Button className={classes.button} startIcon={<LinkedInIcon />}>
                LinkedIn
            </Button>
            </MaterialLink>
            <MaterialLink href='mailto:alamin.ece.ku@gmail.com' target="_blank">
              <Button className={classes.button} startIcon={<ContactMailIcon />}>
                Email
            </Button>
            </MaterialLink>
            <MaterialLink href='https://www.facebook.com/alamin.ece.ku/' target="_blank">
              <Button className={classes.button} startIcon={<FacebookIcon />}>
                Facebook
            </Button>
            </MaterialLink>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
