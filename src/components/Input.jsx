import React from 'react';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { WordDataContext } from '../contexts/WordDataContext.jsx';

export default function Input() {

    // Getting search icon from context.
    const { searchIcon } = useContext(WordDataContext);

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
    }

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
                    <img
                        src={searchIcon}
                        alt="Search"
                        height={20} />
                </button>
            </label>
        </div>
    );
};
