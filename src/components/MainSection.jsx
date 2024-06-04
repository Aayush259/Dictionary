import searchDark from '../images/search-dark.svg';
import searchLight from '../images/search-light.svg';
import historyDark from '../images/clock-rotate-left-dark.svg';
import historyLight from '../images/clock-rotate-left-light.svg';
import houseDark from '../images/house-dark.svg';
import houseLight from '../images/house-light.svg';
import xMarkDark from '../images/xmark-dark.svg';
import xMarkLight from '../images/xmark-light.svg';
import { useEffect, useState } from "react";
import { WordDataContextProvider } from '../contexts/WordDataContext.jsx';
import { Outlet } from 'react-router-dom';
import WordResult from "./WordResult";
import NavLinks from './NavLinks.jsx';

export default function MainSection({ theme, userData, setUserData }) {

    const iconMap = {
        'light': { search: searchDark, history: historyDark, home: houseDark, xMark: xMarkDark },
        'dark': { search: searchLight, history: historyLight, home: houseLight, xMark: xMarkLight },
    }
    // // Set search icon and history icon image according to theme.
    // const searchIcon = theme === 'light' ? searchDark : searchLight;
    // const historyIcon = theme === 'light' ? historyDark : historyLight;
    // const homeIcon = theme === 'light' ? houseDark : houseLight;

    const searchIcon = iconMap[theme].search;
    const historyIcon = iconMap[theme].history;
    const homeIcon = iconMap[theme].home;
    const xMarkIcon = iconMap[theme].xMark;

    // State for word to fetch api data for the word user searched for.
    const [word, setSearchWord] = useState(null);

    // State for the word  searched by user.
    const [wordData, setWordData] = useState(null);

    // The outputSection state will when user searches for any word.
    const [outputSection, setOutputSection] = useState(null);

    /*
        This function handles the wordData.
    */
    const handleData = (data) => {
        // If the word not found, then show error message for the word not found, else display output.
        if (data.title) {

            const errorWordNotFound = (
                <div className='error'>
                    <p className='errorTitle'>{wordData["title"]}</p>
                    <p className='errorDescription'>{wordData["message"]}</p>
                    <p className='errorResolution'>{wordData["resolution"]}</p>
                </div>
            );

            setOutputSection(errorWordNotFound);
        } else {

            const word = data[0]['word'];
            const phonetics = data[0]['phonetics'];
            const meanings = data[0]['meanings'];

            // Update user data in local storage.
            setUserData(prevData => {

                // New object with the word user has searched for.
                const newObject = {
                    id: Date.now(),
                    word: word
                };

                // Updated array of word history data.
                const updatedArray = [newObject, ...prevData[1]];

                // If history is greater than 100, then remove the last data object from updatedArray.
                if (updatedArray.length > 100) {
                    updatedArray.pop();
                }

                return [prevData[0], updatedArray]
             })

            setOutputSection(<WordResult word={word} phonetics={phonetics} meanings={meanings} />);
        }
    };

    // Update the result view when user search for a word each time.
    useEffect(() => {
        if (wordData) {
            handleData(wordData);
        }
    }, [wordData]);

    return (
        <WordDataContextProvider value={{ homeIcon, searchIcon, historyIcon, xMarkIcon, word, outputSection, userData, setUserData, setSearchWord, setWordData, setOutputSection }}>
            <main className={`main ${theme}`}>
                <NavLinks />
                <Outlet />
            </main>
        </WordDataContextProvider>
    );
}

// https://www.google.com/search?q=chat