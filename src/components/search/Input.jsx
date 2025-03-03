import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Input() {

    // Navigate function.
    const navigate = useNavigate();

    // Reference for input element.
    const inputRef = useRef();

    /*
        This function updates the searchWordParam (search query or URL of the page).
    */
    const handleSearchBtnClick = () => {
        const wordToSearch = inputRef.current.value.toString();

        if (wordToSearch) {
            navigate(`/Dictionary/search/${wordToSearch}`);
        };
    };

    return (
        <div
            className="w-[98%] mx-auto my-8"
        >
            <label
                htmlFor="searchWord"
                className="flex flex-row items-center justify-center bg-violet-200 w-fit mx-auto rounded-3xl"
            >
                <input
                    type="text"
                    name="word"
                    id="searchWord"
                    className="flex-grow bg-transparent text-lg outline-none p-2 dark:text-violet-950"
                    placeholder="Search for a word..."
                    ref={inputRef}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearchBtnClick()
                    }}
                />
                <button
                    className='h-full p-2 rounded-full'
                    onClick={handleSearchBtnClick}
                    aria-label='search'
                >
                    <FontAwesomeIcon
                        icon="fa-solid fa-magnifying-glass"
                        className="text-xl dark:text-violet-800"
                    />
                </button>
            </label>
        </div>
    );
};
