import React from 'react';
import PropTypes from 'prop-types';

export default function FooterLink({ linkDetails }) {

    // Getting link details.
    const linkName = linkDetails['linkName'];
    const linkTo = linkDetails['linkTo'];
    const linkIcon = linkDetails['linkIcon'];

    return (
        <a
            href={linkTo}
            target="_blank"
            className="socialLink"
        >
            <img src={linkIcon} alt={linkName} height={25} />
        </a>
    );
};

FooterLink.propTypes = {
    linkDetails: PropTypes.object.isRequired,
};
