import React from 'react';
import photo from '../images/photo.jpeg';
import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';

export default function Header({theme, changeTheme}) {

    // If theme is light, then show moon icon, else show sun icon.
    const themeBtnIcon = theme === 'light' ? iconMoon : iconSun;

    return (
        <header className={`header flex ${theme}`}>
            <h1>Dictionary</h1>
            <div className='flex'>
                <button className='changeThemeBtn' onClick={() => changeTheme()}>
                    <img src={themeBtnIcon} alt="Change theme" width={20} style={{transform: 'rotate(-15deg)'}} />
                </button>
                <img src={photo} alt="Author" height={40} />
            </div>
        </header>
    );
};