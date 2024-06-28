import React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { WordDataContext } from '../contexts/WordDataContext';
import { useSearchParams } from 'react-router-dom';
import Loader from './Loader.jsx';

export default function Input() {

    const { searchIcon, word, setSearchWord, setWordData, setOutputSection } = useContext(WordDataContext);

    // Current URL string (query string).
    const [searchWordParam, setSearchWordParam] = useSearchParams();

    // When searchWordParam change, then update the word state to the actual word in the searchWordParam ('word' query).
    useEffect(() => {
        setSearchWord(searchWordParam.get('word'));
    }, [searchWordParam]);

    // This useEffect will create a side effect when the word state is changed, means when user search for a word.
    useEffect(() => {

        if (word) {

            // New abort controller.
            const controller = new AbortController();

            setOutputSection(<Loader />)
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

            fetch(url, { signal: controller.signal })
            .then(response => response.json())
            .then(data => setWordData(data))
            .catch(err => {
                console.log('Error:', err);
                const fetchError = (
                    <div>
                        <p className='fetchError'>Something went wrong, try again... 😬</p>
                    </div>
                );
                setOutputSection(fetchError);
            });

            return () => {
                if (controller) {
                    controller.abort();
                }
            };
        } else {
            setOutputSection('');
        };
    }, [word]);

    // Reference for input element.
    const inputRef = useRef();

    /*
        This function updates the searchWordParam (search query or URL of the page).
    */
    const handleSearchBtnClick = () => {
        // Getting the input element value.
        const wordToSearch = inputRef.current.value.toString();
        setSearchWordParam({'word': wordToSearch});
    }

    return (
        <div className='search'>
            <label htmlFor="searchWord" className='flex'>
                <input type="text" name="word" id="searchWord" placeholder="Search for a word..." ref={inputRef} onKeyDown={(e) => {if (e.key === 'Enter') handleSearchBtnClick()}} />
                <button className='searchWordBtn' onClick={handleSearchBtnClick}>
                    <img src={searchIcon} alt="Search" height={20} />
                </button>
            </label>
        </div>
    );
};