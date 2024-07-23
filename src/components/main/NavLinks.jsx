import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useWordDataContext } from '../../contexts/WordDataContext';

export default function NavLinks() {

    // Getting historyIcon and searchIcon from WordDataContext.
    const { homeIcon, searchIcon, historyIcon, homeLinkActive } = useWordDataContext();

    // State for hamburger button to track it's active or inActive stage.
    const [hamActiveState, setHamActiveState] = useState('inActive');

    // Reference to the menu.
    const menuRef = useRef();

    // This function hides the navlinks by setting the hamActiveState to inActive.
    const hideOptionBtnContainer = () => {
        setHamActiveState('inActive');
    };

    useEffect(() => {

        const handleClick = (e) => {
            // If the click is on the menu, then don't hide it, else hides it.
            if (!menuRef.current.contains(e.target)){
                hideOptionBtnContainer();
            };
        };

        // Array of events for desktop and mobile.
        const events = ['mousedown', 'touchstart'];

        // Adding event listener to handle click on document.
        events.forEach((event) => document.addEventListener(event, handleClick));

        // Removing the event listener.
        return () => {
            events.forEach((event) => document.removeEventListener(event, handleClick));
        };
    });

    return (
        <>
        <div className='menu' ref={menuRef}>
            <button 
                type='button' 
                className={`
                    hamburger flex
                    ${hamActiveState}
                `}
                onClick={(e) => {
                    setHamActiveState(prevState => prevState === 'inActive' ? 'active' : 'inActive');
                    e.stopPropagation();
                }}
            >
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </button>

            <div style={{position: 'relative'}}>
                <div className='optionBtnContainer flex'>

                    <li className='home'>
                        <NavLink to={'/Dictionary/'}
                            className={() => `
                                navLink flex ${homeLinkActive ? 'active' : 'inactive'}
                            `}
                            onClick={hideOptionBtnContainer}
                        >
                            <img src={homeIcon} alt="home" height={14} />
                            Home
                        </NavLink>
                    </li>

                    <li className='search'>
                        <NavLink to={'/Dictionary/search'}
                            className={({ isActive }) => `
                                navLink flex ${isActive ? 'active' : 'inactive'}
                            `}
                            onClick={hideOptionBtnContainer}
                        >
                            <img src={searchIcon} alt="search" height={14} />
                            Search
                        </NavLink>
                    </li>

                    <li className='history'>
                        <NavLink to={'/Dictionary/history'}
                            className={({ isActive }) => `
                                navLink flex ${isActive ? 'active' : 'inactive'}
                            `}
                            onClick={hideOptionBtnContainer}
                        >
                            <img src={historyIcon} alt="history" height={15} />
                            History
                        </NavLink>
                    </li>
                    
                </div>
            </div>
        </div>
        </>
    );
};
