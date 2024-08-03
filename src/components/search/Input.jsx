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
        // setSearchWordParam({'word': wordToSearch});

        if (wordToSearch) {
            navigate(`/Dictionary/search/${wordToSearch}`);
        };
    };

    return (
        <div className='search'>
            <label htmlFor="searchWord" className='flex'>
                <input
                    type="text"
                    name="word"
                    id="searchWord"
                    placeholder="Search for a word..."
                    ref={inputRef}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearchBtnClick()
                    }}
                />
                <button className='searchWordBtn' onClick={handleSearchBtnClick}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{fontSize: '20px'}} />
                </button>
            </label>
        </div>
    );
};
