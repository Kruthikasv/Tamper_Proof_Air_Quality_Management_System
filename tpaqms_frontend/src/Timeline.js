import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PropTypes from 'prop-types';

function NetworkTimeline() {

    
  return (
    <Timeline sx={{float:"left",width:500,position:"absolute"}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Generating crypto-material</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Creating orderer</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Creating Spcb Organisation</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default NetworkTimeline;
