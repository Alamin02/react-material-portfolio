import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Heading1 = ({ text }) => {
  return (
    <>
      <Typography variant='h2' gutterBottom>
        {text}
      </Typography>
      <Divider />
    </>
  )
}

export default Heading1;
