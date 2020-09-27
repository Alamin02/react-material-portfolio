import React from 'react';
import Heading1 from '../common/components/Heading1';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Projects() {
  return (
    <>
      <Heading1 text="Skills" />

      <Box marginTop={5} marginBottom={5}>
        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Programming Languages:
        </Typography>
          <Typography variant="body1">
          Python, JavaScript, TypeScript, C, C++,  Java, MATLAB
        </Typography>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Embedded Development Boards:
        </Typography>
          <Typography variant="body1">
            Arduino, Raspberry Pi, NodeMCU, Attiny85
        </Typography>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            EDA Tools:
        </Typography>
          <Typography variant="body1">
            KiCad, MultiSim, Proteus
        </Typography>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Web Frameworks:
        </Typography>
          <Typography variant="body1">
            React, Node, Django, Flask, etc.
        </Typography>
        </Box>
        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Database Management System:
        </Typography>
          <Typography variant="body1">
            PostgreSQL, MongoDB, SQLite
        </Typography>
        </Box>
        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Miscellaneous:
        </Typography>
          <Typography variant="body1">
            Machine Learning, Android, Verilog, Git, Web Scraping, Redis, Docker.
        </Typography>
        </Box>
      </Box>


      <Heading1 text="Projects" />

      <Box marginTop={5} marginBottom={5}>
        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Web API for real-time sensor monitoring
        </Typography>
          <Typography variant="body1">
            As an undergraduate academic project, built a web service that provides API to connect sensors to the server
            and provides a UI that visualize the data on real-time.
        </Typography>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Node to Node Live Feed Electricity Monitoring
        </Typography>
          <Typography variant="body1">
            This project is a prototype of a model built to address the problem of reducing the Electricity theft from live
            wires. This project provides a real-time data monitoring of power transformers. It was built as an entry of
            national power hackathon 2019.
        </Typography>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant='h6'>
            Khude Gobeshok
        </Typography>
          <Typography variant="body1">
            Open source platform where students across different disciplines can find and share projects, connect with other
            members. Also, it has an ordering functionality for 3D printing, PCB printing etc.
        </Typography>
        </Box>
      </Box>
    </>
  );
}
