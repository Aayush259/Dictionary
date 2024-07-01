import React from 'react';
import PropTypes from 'prop-types';
import xDark from '../images/x-twitter-dark.svg';
import xLight from '../images/x-twitter-light.svg';
import linkedinDark from '../images/linkedin-dark.svg';
import linkedinLight from '../images/linkedin-light.svg';
import githubDark from '../images/github-dark.svg';
import githubLight from '../images/github-light.svg';

export default function Footer({ theme }) {

    // Icon map for light and dark themes.
    const iconMap = {
        'light': {x: xDark, linkedin: linkedinDark, github: githubDark},
        'dark':  {x: xLight, linkedin: linkedinLight, github: githubLight}
    };

    const githubIcon = iconMap[theme]['github'];
    const xIcon = iconMap[theme]['x'];
    const linkedinIcon = iconMap[theme]['linkedin'];

    return (
        <footer className={`footer ${theme}`}>
            <div className='socialLinksContainer flex'>
                <a href='https://x.com/Aayush259_' className='socialLink' target='_blank'>
                    <img src={xIcon} alt="Aayush's twitter/X" height={25} />
                </a>

                <a href='https://github.com/Aayush259' className='socialLink' target='_blank'>
                    <img src={githubIcon} alt="Aayush's twitter/X" height={25} />
                </a>

                <a href='https://www.linkedin.com/in/aayush-kumar-kumawat/' className='socialLink' target='_blank'>
                    <img src={linkedinIcon} alt="Aayush's twitter/X" height={25} />
                </a>
            </div>
            <div className='about'></div>
        </footer>
    );
};

Footer.propTypes = {
    theme: PropTypes.string.isRequired,
};
