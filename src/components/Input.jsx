import { useEffect, useRef, useState } from 'react';
import searchDark from '../images/search-dark.svg';
import searchLight from '../images/search-light.svg';

export default function Input({theme, setWordData}) {

    // Set search icon image according to theme.
    const searchIcon = theme === 'light' ? searchDark : searchLight;

    // State for word to fetch api data for the word user searched for.
    const [word, setSearchWord] = useState(null);

    // This useEffect will create a side effect when the word state is changed, means when user search for a word.
    useEffect(() => {
        if (word) {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

            fetch(url)
            .then(response => response.json())
            .then(data => setWordData(data))
            .catch(err => console.log('error:', err));
        }
    }, [word]);

    // Reference for input element.
    const inputRef = useRef();

    /*
        This function updates the word state.
    */
    const handleSearchBtnClick = () => {
        // Getting the input element value.
        const wordToSearch = inputRef.current.value.toString();
        setSearchWord(wordToSearch);
    }

    return (
        <div className='search'>
            <label htmlFor="searchWord" className={`flex ${theme}`}>
                <input type="text" name="word" id="searchWord" placeholder="Search for a word..." ref={inputRef} />
                <button className='searchWordBtn' onClick={handleSearchBtnClick}>
                    <img src={searchIcon} alt="Search" height={20} />
                </button>
            </label>
        </div>
    );
}