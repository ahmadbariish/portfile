import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faMugHot,
  faUsers,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon">
          <FontAwesomeIcon icon={faFire} />
        </i>
        <div>
          <h3 className="about__title">56</h3>
          <span className="about__subtitle">Project completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon">
          <FontAwesomeIcon icon={faMugHot} />
        </i>
        <div>
          <h3 className="about__title">5670</h3>
          <span className="about__subtitle">Cup of coffee</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon">
          <FontAwesomeIcon icon={faUsers} />
        </i>
        <div>
          <h3 className="about__title">205</h3>
          <span className="about__subtitle">Satisfied clients</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon">
          <FontAwesomeIcon icon={faTrophy} />
        </i>
        <div>
          <h3 className="about__title">3</h3>
          <span className="about__subtitle">Nominees winner</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
