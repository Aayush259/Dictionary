import React from 'react';
import FooterLink from './FooterLink.jsx';

export default function Footer() {

    // This function generates a link object which contains necessary details about link.
    const getLinkObject = (linkName, linkTo, linkIcon) => ({
        linkName,
        linkTo,
        linkIcon,
    });

    // Array of objects for all social links.
    const allSocialLinks = [
        getLinkObject('Twitter/X', 'https://x.com/Aayush259_', 'fa-brands fa-x-twitter'),
        getLinkObject('GitHub', 'https://github.com/Aayush259', 'fa-brands fa-github'),
        getLinkObject('LinkedIn', 'https://www.linkedin.com/in/aayush-kumar-kumawat/', 'fa-brands fa-linkedin'),
    ];

    return (
        <footer className="w-full absolute bottom-0 pb-5">
            <div className="flex items-center justify-center gap-14">
                
                {
                    allSocialLinks.map(link => (
                        <FooterLink key={link['linkName']} linkDetails={link} />
                    ))
                }

            </div>
        </footer>
    );
};
