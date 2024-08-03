import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavLinks() {

    // State for hamburger button to track it's active or inActive stage.
    const [hamActiveState, setHamActiveState] = useState('inActive');

    // Reference to the menu.
    const menuRef = useRef();

    const getLinkDetails = (name, link, icon) => ({
        name, link, icon
    });

    const navLinkDetails = [
        getLinkDetails('home', '/Dictionary/', 'fa-solid fa-house'),

        getLinkDetails('search', '/Dictionary/search', 'fa-solid fa-magnifying-glass'),

        getLinkDetails('history', '/Dictionary/history', 'fa-solid fa-clock-rotate-left'),
    ];

    // This function hides the navlinks by setting the hamActiveState to inActive.
    const hideOptionBtnContainer = () => {
        setHamActiveState('inActive');
    };

    useEffect(() => {

        const handleClick = (e) => {
            // If the click is on the menu, then don't hide it, else hides it.
            if (!menuRef.current.contains(e.target)) {
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
    }, []);

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

                <div style={{ position: 'relative' }}>
                    <div className='optionBtnContainer flex'>

                        {
                            navLinkDetails.map(linkDetail => (
                                <li
                                    key={linkDetail['name']}
                                    className={linkDetail['name']}
                                >
                                    <NavLink
                                        to={linkDetail['link']}
                                        end
                                        className={({ isActive }) => `${isActive ? "active" : "inactive"} navLink flex`}
                                        style={{textTransform: 'capitalize'}}
                                        onClick={hideOptionBtnContainer}
                                    >

                                        <FontAwesomeIcon icon={linkDetail['icon']} />
                                        {linkDetail['name']}
                                    </NavLink>
                                </li>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    );
};
