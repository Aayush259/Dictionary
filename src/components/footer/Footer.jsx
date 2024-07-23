import React from 'react';
import PropTypes from 'prop-types';
import xDark from '../../images/x-twitter-dark.svg';
import xLight from '../../images/x-twitter-light.svg';
import linkedinDark from '../../images/linkedin-dark.svg';
import linkedinLight from '../../images/linkedin-light.svg';
import githubDark from '../../images/github-dark.svg';
import githubLight from '../../images/github-light.svg';
import FooterLink from './FooterLink';

export default function Footer({ theme }) {

    // Icon map for light and dark themes.
    const iconMap = {
        'light': {x: xDark, linkedin: linkedinDark, github: githubDark},
        'dark':  {x: xLight, linkedin: linkedinLight, github: githubLight}
    };

    // This function generates a link object which contains necessary details about link.
    const getLinkObject = (linkName, linkTo, linkIcon) => ({
        linkName,
        linkTo,
        linkIcon,
    });

    // Array of objects for all social links.
    const allSocialLinks = [
        getLinkObject('Twitter/X', 'https://x.com/Aayush259_', iconMap[theme]['x']),
        getLinkObject('GitHub', 'https://github.com/Aayush259', iconMap[theme]['github']),
        getLinkObject('LinkedIn', 'https://www.linkedin.com/in/aayush-kumar-kumawat/', iconMap[theme]['linkedin']),
    ];

    return (
        <footer className={`footer ${theme}`}>
            <div className='socialLinksContainer flex'>
                
                {
                    allSocialLinks.map(link => (
                        <FooterLink key={link['linkName']} linkDetails={link} />
                    ))
                }

            </div>
            <div className='about'></div>
        </footer>
    );
};

Footer.propTypes = {
    theme: PropTypes.string.isRequired,
};
