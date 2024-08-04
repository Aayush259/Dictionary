import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWordDataContext } from '../../contexts/WordDataContext.jsx';

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
            <p
                className="text-center my-20 mx-4 text-xl sm:text-2xl text-violet-900 dark:text-violet-300"
            >
                Your search history will appear here. 😊
            </p>
        );
    };

    return (
        <div
            className="w-[98%] mx-auto"
        >

            <button
                type="button"
                className="bg-violet-800 text-white py-1 px-3 rounded-3xl font-semibold text-lg hover:bg-violet-600 mb-4"
                onClick={
                    () => {
                        setUserData(prevData => [prevData[0], []])
                    }}
            >
                Clear All
            </button>

            {
                userData[1].map(data => (
                    <div
                        className="w-full flex items-center justify-between px-4 py-2 text-lg sm:text-xl gap-2 border-b"
                        key={data["id"]}
                    >

                        <div
                            className="flex flex-row flex-wrap items-center gap-4"
                        >
                            <p>{
                                formatDate(data['id'])
                            }</p>

                            <Link
                                to={`/Dictionary/search/${data['word']}`}
                                className="capitalize hover:underline underline-offset-4 text-violet-800 font-semibold dark:text-violet-300"
                            >
                                {
                                    data['word']
                                }
                            </Link>
                        </div>

                        <button
                            type='button'
                            onClick={() => removeDataItem(data['id'])}
                            className="text-red-600 hover:text-red-900"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-trash" />
                        </button>

                    </div>
                ))
            }
        </div>
    );
};
