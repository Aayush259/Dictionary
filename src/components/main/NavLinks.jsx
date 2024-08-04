import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavLinks() {

    // State for hamburger button to track it's active or inActive stage.
    const [hamActiveState, setHamActiveState] = useState(false);

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
        setHamActiveState(false);
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
            <div
                className="w-[98%] mx-auto my-4 relative"
                ref={menuRef}
            >
                <button
                    type='button'
                    className={`
                    hamburger flex flex-col sm:hidden ml-auto mr-4 mb-4 gap-1
                `}
                    onClick={(e) => {
                        setHamActiveState(prevState => !prevState);
                        e.stopPropagation();
                    }}
                >
                    {
                        ["rotate-45 translate-y-[7px]", "opacity-0", "-rotate-45 -translate-y-2"].map(twClass => (
                            <div
                            key={twClass}
                            className={`${hamActiveState ? twClass : ""} w-8 h-1 rounded-full bg-slate-700 duration-200 dark:bg-violet-200`}
                            ></div>
                        ))
                    }
                </button>

                <div className="relative">
                    <div
                    className={`${hamActiveState ? "opacity-100 z-50" : "opacity-0 -z-50 -mt-10 sm:opacity-100 sm:mt-0"} flex flex-col sm:flex-row text-lg gap-10 absolute sm:static right-4 overflow-hidden duration-200 bg-violet-300 sm:bg-transparent py-4 px-8 rounded-lg dark:bg-violet-700 sm:dark:bg-transparent`}
                    >

                        {
                            navLinkDetails.map(linkDetail => (
                                <NavLink
                                    key={linkDetail['name']}
                                    to={linkDetail['link']}
                                    end
                                    className={({ isActive }) => `
                                        ${isActive ? "text-violet-700 dark:text-violet-200 before:w-full before:left-0" : "before:w-0 before:left-1/2"}
                                        navLink flex flex-row items-center justify-center gap-2 px-1 relative before:absolute before:block before:h-[3px] before:-bottom-1 before:bg-violet-700 dark:before:bg-violet-200 before:rounded-sm before:duration-200 hover:opacity-70 duration-200
                                    `}
                                    style={{ textTransform: 'capitalize' }}
                                    onClick={hideOptionBtnContainer}
                                >

                                    <FontAwesomeIcon icon={linkDetail['icon']} />
                                    {linkDetail['name']}
                                </NavLink>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    );
};
