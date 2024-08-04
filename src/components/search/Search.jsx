import React, { lazy, Suspense, useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useWordDataContext } from '../../contexts/WordDataContext.jsx';
const Input = lazy(() => import('./Input.jsx'));
const WordResult = lazy(() => import('./WordResult.jsx'));
const NotFoundError = lazy(() => import('../error/NotFoundError.jsx'));
import Loader from '../Loader.jsx';

export default function Search() {

    // Getting function to add words in history from context.
    const { addWordInHistory } = useWordDataContext();

    // Getting word parameter from URL.
    const { searchWordParam } = useParams();

    // Result state.
    const [result, setResult] = useState(null);

    // This function will handle fetched data from API and update the user's search history.
    const handleWordData = useCallback((wordData) => {

        // Update user history.
        addWordInHistory(searchWordParam);

        wordData.title ? setResult(<NotFoundError wordData={wordData} />) : setResult(<WordResult wordData={wordData} />);
    }, [searchWordParam, setResult]);

    // This function fetches data from API and update the result on UI.
    const fetchWordData = useCallback((controller) => {

        // While the data is fetching, display Loader.
        setResult(<Loader />);

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWordParam}`;

        fetch(url, { signal: controller.signal })
            .then(response => response.json())
            .then(data => handleWordData(data))
            .catch(err => {
                console.log('Error:', err);
                const fetchError = (
                    <div>
                        <p
                            className="text-center my-20 mx-4 text-xl sm:text-2xl text-violet-900 dark:text-violet-300"
                        >
                            Something went wrong, try again... 😬
                        </p>
                    </div>
                );

                setResult(fetchError);
            });
    }, [searchWordParam, setResult]);

    // Search for data when the searchWordParam is changed.
    useEffect(() => {
        if (searchWordParam) {
            // New abort controller.
            const controller = new AbortController();

            // Fetch word data.
            fetchWordData(controller);

            // Cleanup function.
            return () => {
                if (controller) {
                    controller.abort();
                }
            };
        }
    }, [searchWordParam, fetchWordData]);

    return (
        <>
            <Input />
            <Suspense fallback={<Loader />}>
                {result}
            </Suspense>
        </>
    );
};
