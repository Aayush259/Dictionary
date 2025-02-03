import React from 'react';
import photo from '../../images/photo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../app/features/themeSlice.js';

export default function Header() {

    // Getting function to change theme from context.
    // const { changeTheme } = useTheme();
    const dispatch = useDispatch();

    return (
        <header
            className="flex flex-wrap w-full items-center justify-between p-4 bg-violet-300 rounded-lg dark:bg-violet-900"
        >
            <h1
                className="text-2xl sm:text-3xl font-semibold text-violet-950 dark:text-violet-200"
            >
                Dictionary
            </h1>

            <div
                className="flex items-center justify-center gap-4"
            >
                <button onClick={() => dispatch(changeTheme())} aria-label='Toggle theme'>
                    <FontAwesomeIcon
                        icon="fa-solid fa-moon"
                        className="text-xl -rotate-[25deg]"
                    />
                </button>

                <img
                    src={photo}
                    alt="Author"
                    height={40}
                    width={40}
                    className="h-10 rounded-full"
                />
            </div>
        </header>
    );
};
