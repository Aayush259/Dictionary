import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function FooterLink({ linkDetails }) {

    // Getting link details.
    const linkTo = linkDetails['linkTo'];
    const linkIcon = linkDetails['linkIcon'];

    return (
        <a
            href={linkTo}
            target="_blank"
            className="socialLink"
        >

            <FontAwesomeIcon icon={linkIcon} style={{fontSize: '25px', color: 'black'}} />
        </a>
    );
};

FooterLink.propTypes = {
    linkDetails: PropTypes.object.isRequired,
};
