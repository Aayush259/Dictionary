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
            className="text-violet-800 dark:text-violet-300 text-2xl md:text-3xl"
        >

            <FontAwesomeIcon icon={linkIcon} />
        </a>
    );
};

FooterLink.propTypes = {
    linkDetails: PropTypes.object.isRequired,
};
