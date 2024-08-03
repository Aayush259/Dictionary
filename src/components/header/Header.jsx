import React from 'react';
import photo from '../../images/photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {

    return (
        <header
            className="flex flex-wrap w-full items-center justify-between p-4 bg-violet-300 rounded-lg"
        >
            <h1
                className="text-2xl sm:text-3xl font-semibold"
            >
                Dictionary
            </h1>

            <div
                className="flex items-center justify-center gap-3"
            >
                <button>
                    <FontAwesomeIcon
                        icon="fa-solid fa-moon"
                        className="text-xl -rotate-[25deg]"
                    />
                </button>

                <img
                    src={photo}
                    alt="Author"
                    className="h-10 rounded-full"
                />
            </div>
        </header>
    );
};
