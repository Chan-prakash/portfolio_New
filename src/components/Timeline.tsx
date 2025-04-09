import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>My Journey</h1>
        <VerticalTimeline>
  <VerticalTimelineElement
    date="2022"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Joined SRM University</h3>
    <h4 className="vertical-timeline-element-subtitle">EIE Department</h4>
    <p>Started my engineering journey and learned Java fundamentals.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="2022"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Intern - Exterbs Club</h3>
    <p>Explored software development and project collaboration.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="May 2023"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">AWS Solution Architect</h3>
    <p>Gained cloud infrastructure knowledge and solutions design.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="Aug 2023"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Certified Programming in Java</h3>
    <h4 className="vertical-timeline-element-subtitle">CodeTantra</h4>
    <p>Enhanced programming logic and hands-on coding skills.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="2024"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Java 5-Star Certification</h3>
    <h4 className="vertical-timeline-element-subtitle">HackerRank</h4>
    <p>Achieved 5-star badge for Java proficiency.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="2024"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Web Development</h3>
    <p>Learned HTML, CSS, and JavaScript. Built portfolio projects.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="Mid 2024"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">AWS Cloud Certifications</h3>
    <p>Completed Cloud Foundation and Cloud Architect exams.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="Late 2024"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Smart India Hackathon</h3>
    <p>Proposed UI/UX design for GrainyX mobile app (agritech).</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="2024"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">UI/UX & Project Design</h3>
    <p>Designed portfolio website and logistics company app UI.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="Nov 2024"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Java Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">AICTE</h4>
    <p>Learned Spring Boot, MySQL, React, and built full-stack projects.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="2025"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Java Programming - NPTEL</h3>
    <p>Currently learning advanced Java concepts.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    date="2025"
    iconStyle={{ background: '#5000ca', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">SneakersHub Web Design</h3>
    <p>Designing a modern e-commerce website UI. Learning backend integration.</p>
  </VerticalTimelineElement>
</VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;