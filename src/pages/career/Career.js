import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Box, Grid, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  companyLogo: {
    height: 80,
    width: 100,
    objectFit: 'contain',
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
            <Typography variant='subtitle2'>June 2019 - Present</Typography>
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
              src={require('../../img/automatio-logo.png')}
              className={classes.companyLogo}
              alt={"Walton"}
            />
          </Grid>
          <Grid item>
              {/* TODO: Add Company Website */}
            <Typography variant='h6'>Software Engieer</Typography>
            <Typography variant='subtitle1'>
              Automatio.co
            </Typography>
            <Typography variant='subtitle2'>June 2019 - Present</Typography>
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

      <Typography variant='h2' gutterBottom>
        Entrepreneurship
      </Typography>
      <Divider />
    </div>
  );
}
