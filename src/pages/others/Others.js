import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Heading1 from '../common/components/Heading1';

export default function Others() {
  return (
    <>
      <Heading1 text="Others" />

      <Box marginTop={5} marginBottom={5}>
        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Medium
          </Typography>
          <Typography variant="body1">
            Sometimes I write about tech related stuff on medium. I'm a writer at <a href="https://blog.vanila.io/">Vanilla Blog</a>.
          </Typography>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Music
          </Typography>
          <Typography variant="body1">
            I love music and try to cover different songs. Here is my <a href="https://www.youtube.com/channel/UCBg2YfW22SuhyF3WfZN3sYA">Youtube Channel</a>.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
