import React from 'react';
import Heading1 from '../common/components/Heading1';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Academics() {
  return (
    <>
      <Heading1 text="Education" />

      <Box marginTop={5} marginBottom={5}>
        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Undergraduate  | 2015 to 2019
        </Typography>
          <Typography variant="body1">
            Khulna University, Bangladesh
        </Typography>
          <Typography variant="body2">
            B.Eng. in Electronics and Communication Engineering
        </Typography>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Higher Secondary Certificate  | 2012 to 2014
        </Typography>
          <Typography variant="body1">
            Al Amin Academy School and College, Bangladesh
        </Typography>
          <Typography variant="body2">
            GPA: 5.00/5.00
        </Typography>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Secondary School Certificate  | 2010 to 2012
        </Typography>
          <Typography variant="body1">
            Rahimanagar B.A.B High School, Bangladesh
        </Typography>
          <Typography variant="body2">
            GPA: 5.00/5.00
        </Typography>
        </Box>
      </Box>

      <Heading1 text="Research" />
      <Box marginTop={5} marginBottom={5}>
        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Research Interests
        </Typography>
          <Typography variant="body1">
            Internet of Things, Embedded Systems, Machine Learning, Bio Informatics
        </Typography>
        </Box>
        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Conference Papers
        </Typography>

          <Typography variant="body1">
            M. A. Rahman, S. M. Shoaib, M. A. Amin, R. N. Toma, M. A. Moni and M. A. Awal, "A
            Bayesian Optimization Framework for the Prediction of Diabetes Mellitus," 2019 5th International Conference
            on Advances in Electrical Engineering (ICAEE), Dhaka, Bangladesh, 2019, pp. 357-362.
        </Typography>

        </Box>
      </Box>
    </>
  );
}
