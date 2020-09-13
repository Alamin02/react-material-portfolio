import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  companyLogo: {
    height: 80,
    width: 100,
    objectFit: 'contain',
    border: 'solid 0.1rem',
  },
});

export default function Career() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h2' gutterBottom>
        Experience
      </Typography>
      <Divider />

      <Box marginTop={5} marginBottom={5}>
        <Box marginBottom={1}>
          <Grid container spacing={2}>
            <Grid item>
              <img
                src={require('../../img/automatio-logo.png')}
                className={classes.companyLogo}
                alt={"Walton"}
              />
            </Grid>
            <Grid item>
              {/* TODO: Add Company Website */}
              <Typography variant='h6'>Software Engineer</Typography>
              <Typography variant='subtitle1'>
                Automatio.co
            </Typography>
              <Typography variant='subtitle2'>April 2020 - Present</Typography>
            </Grid>
          </Grid>
        </Box>

        <Typography variant='body1'>
          automatio.co is a tool for automating, scraping and mining data from any website under few minutes. You can install it as Chrome Extension, go to website, select what you want to scrape, setup scheduling and pagination. It can go beyond authenticated pages, captcha and much more!
        </Typography>
        <Typography variant='body1'>
          I primarily work on the backend and the Scraper where I have to deal with GraphQL, Redis, PubSub, etc. Also I optimize and update frontend and the extension on demand.
        </Typography>
      </Box>

      <Box marginTop={5} marginBottom={5}>
        <Grid container spacing={2}>
          <Grid item>
            <img
              src={require('../../img/walton-logo.png')}
              className={classes.companyLogo}
              alt={"Walton"}
            />
          </Grid>
          <Grid item>
            <Typography variant='h6'>Deputy Assistant Director</Typography>
            <Typography variant='subtitle1'>
              Computer Research and Development · Walton Digitech Industries
              Ltd.
            </Typography>
            <Typography variant='subtitle2'>June 2019 - April 2020</Typography>
          </Grid>
        </Grid>

        <Typography variant='body1'>
          <ul>
            <li>
              Product manager of "Access control and time attendance product".
            </li>
            <li>Hardware sourcing and development planning.</li>
            <li>
              Design and develop hardware-software integrated solution in
              collaboration with an international team.
            </li>
            <li>Monitor the overall process.</li>
          </ul>
        </Typography>
      </Box>

      <Box marginTop={5} marginBottom={5}>
        <Grid container spacing={2}>
          <Grid item>
            <img
              src={require('../../img/upwork.png')}
              className={classes.companyLogo}
              alt={"Walton"}
            />
          </Grid>
          <Grid item>
            <Typography variant='h6'>Freelance Software Developer</Typography>
            <Typography variant='subtitle1'>
              Upwork
            </Typography>
            <Typography variant='subtitle2'>January 2019 - Present</Typography>
          </Grid>
        </Grid>

        <Typography variant='body1'>
          <ul>
            <li>
              Have successfully completed multiple client projects.
            </li>
            <li>Offers development service in Python and JavaScript base frameworks</li>
            <li>
              Communicative and committed for on-time delivery.
            </li>
            <li>Completed projects involves React, Firebase, Laravel etc.</li>
          </ul>
        </Typography>
      </Box>


    </div>
  );
}
