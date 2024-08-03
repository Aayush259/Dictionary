import React from 'react';
import { useWordDataContext } from '../../contexts/WordDataContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function History() {

    const { userData, setUserData } = useWordDataContext();

    // This function removes the word data from localstorage whose id matches with the gived id.
    const removeDataItem = (id) => {
        const updatedWordHistory = userData[1].filter((data) => data.id !== id);
        setUserData(prevData => [prevData[0], updatedWordHistory]);
    };

    // This function returns the date in the format dd-mm-yyyy from the passed milliseconds.
    const formatDate = (milliseconds) => {
        // New date instance from the given milliseconds.
        const date = new Date(milliseconds);

        // Getting day, month, and year.
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}-${month}-${year}`;
    };

    // If there is no hisotry yet, then returns a simple message.
    if (userData[1].length <= 0) {
        return (
            <p className='noHistoryMsg'>Your search history will appear here. 😊</p>
        );
    };

    return (
        <div className='historySection'>

            <button
                type='button'
                className='clearAllBtn'
                onClick={
                    () => {
                        setUserData(prevData => [prevData[0], []])
                    }}
            >
                Clear All
            </button>

            {
                userData[1].map((data, index) => (
                    <div className='historyBlock flex' key={index}>

                        <div className='flex'>
                            <p className='date'>{
                                formatDate(data['id'])
                            }</p>

                            <Link to={`/Dictionary/search/${data['word']}`} className='historyWord'>{
                                data['word'].charAt(0).toUpperCase() + data['word'].slice(1)
                            }</Link>
                        </div>

                        <button type='button' onClick={() => removeDataItem(data['id'])}>
                            <FontAwesomeIcon icon="fa-solid fa-trash" />
                        </button>

                    </div>
                ))
            }
        </div>
    );
};
