import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faPinterest,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/ahmad.barish.9?"
        className="home__social-link"
        target="_blank"
      >
        <i className="icon-home">
          <FontAwesomeIcon icon={faInstagram} />
        </i>
      </a>
      {/* <a href="" className="home__social-link" target="_blank">
                <i className="icon-home">
                    <FontAwesomeIcon icon={faXTwitter} />
                </i>
            </a> */}
      <a
        href="https://pin.it/6bxmo1l8t"
        className="home__social-link"
        target="_blank"
      >
        <i className="icon-home">
          <FontAwesomeIcon icon={faPinterest} />
        </i>
      </a>
      <a
        href="https://github.com/ahmadbariish"
        className="home__social-link"
        target="_blank"
      >
        <i className="icon-home">
          <FontAwesomeIcon icon={faGithub} />
        </i>
      </a>
      <a
        href="https://www.linkedin.com/in/ahmad-barish?"
        className="home__social-link"
        target="_blank"
      >
        <i className="icon-home">
          <FontAwesomeIcon icon={faLinkedin} />
        </i>
      </a>
    </div>
  );
};

export default HeaderSocials;
