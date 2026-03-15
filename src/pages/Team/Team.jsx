import React, { useRef } from 'react';
import './Team.css';
import HorizontalScroll from './TeamComponent/HorizontalScroll';
import { PastTimeline } from './TeamComponent/Timeline';
import { motion, useInView } from "framer-motion";
import Secretaries from './TeamComponent/Secretaries';

const Team = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.1 });

  const timelineVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <div className="team-page shadow-bottom-only shadow-yellow-400 ">
      <HorizontalScroll />
      <Secretaries />
      <motion.div
        ref={timelineRef}
        className="timeline-section"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={timelineVariants}
      >
        <PastTimeline />
      </motion.div>
    </div>
  );
};

export default Team;