import React, { useCallback, useState } from 'react';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WordDataContext } from '../contexts/WordDataContext.jsx';
import Input from './Input.jsx';
import WordResult from './WordResult.jsx';
import Loader from './Loader.jsx';

export default function Search() {

    // Getting outputSection and setHomeLinkActive setter from WordDataContext.
    const { setHomeLinkActive } = useContext(WordDataContext);

    // Getting word parameter from URL.
    const { searchWordParam } = useParams();

    // Result state.
    const [result, setResult] = useState(null);

    // Setting home link active state to false.
    useEffect(() => {
        setHomeLinkActive(false);
    }, [setHomeLinkActive]);

    // This function fetches data from API and update the result on UI.
    const fetchWordData = useCallback(() => {
        // New abort controller.
        const controller = new AbortController();

        // While the data is fetching, display Loader.
        setResult(<Loader />);

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWordParam}`;

        fetch(url, { signal: controller.signal })
        .then(response => response.json())
        .then(data => setResult(<WordResult wordData={data} />))
        .catch(err => {
            console.log('Error:', err);
            const fetchError = (
                <div>
                    <p className='fetchError'>Something went wrong, try again... 😬</p>
                </div>
            );

            setResult(fetchError);
        });

        return () => {
            if (controller) {
                controller.abort();
            }
        };
    }, [searchWordParam]);

    // Search for data when the searchWordParam is changed.
    useEffect(() => {
        if (searchWordParam) {
            fetchWordData();
        }
    }, [searchWordParam, fetchWordData]);

    return (
        <>
        <Input />
        {result}
        </>
    );
};
