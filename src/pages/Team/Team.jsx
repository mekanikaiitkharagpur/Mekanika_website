import React from 'react';
import './Team.css';
import HorizontalScroll from './TeamComponent/HorizontalScroll';
import { PastTimeline } from './TeamComponent/Timeline';
import Secretaries from './TeamComponent/Secretaries';

const Team = () => {
  return (
    <div className="team-page shadow-bottom-only shadow-yellow-400 ">
      <HorizontalScroll />
      <Secretaries />
      <div className="timeline-section">
        <PastTimeline />
      </div>
    </div>
  );
};

export default Team;