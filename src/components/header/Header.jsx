import React from 'react';
import PropTypes from 'prop-types';
import photo from '../../images/photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header({theme, changeTheme}) {

    return (
        <header className={`header flex ${theme}`}>
            <h1>Dictionary</h1>
            <div className='flex'>
                <button className='changeThemeBtn' onClick={() => changeTheme()}>
                    <FontAwesomeIcon icon="fa-solid fa-moon" style={{fontSize: '20px', transform: 'rotate(-25deg)'}} />
                </button>
                <img src={photo} alt="Author" height={40} />
            </div>
        </header>
    );
};

Header.propTypes = {
    theme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired,
};
