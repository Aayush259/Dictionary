import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeScreen() {

    // Function which returns word object.
    const getWordObject = (title, definition) => ({
        title, definition
    });

    // Array of objects for initial word cards.
    const wordCards = [
        getWordObject(`Hello`, `A greeting (salutation) said when meeting someone or acknowledging someone's arrival or presence.`),

        getWordObject(`Genius`, `Someone possessing extraordinary intelligence or skill; especially somebody who has demonstrated this by a creative or original work in science, music, art etc.`),

        getWordObject(`Welcome`, `The act of greeting someone's arrival.`),

        getWordObject(`Mistake`, `An error; a blunder.`),
    ];

    return (
        <>
            <div
                className="w-[98%] mx-auto my-10 px-3 py-4 rounded-lg duration-200 flex flex-row items-center justify-center gap-8 flex-wrap"
            >
                {
                    wordCards.map(card => (
                        <div
                            key={card["title"]}
                            className="w-64 bg-violet-200 p-4 pb-16 duration-200 rounded-2xl relative"
                        >
                            <p
                                className="text-xl font-semibold text-violet-900"
                            >
                                {card["title"]}
                            </p>

                            <p
                                className="my-3 sm:text-lg text-sm"
                            >
                                {card["definition"]}
                            </p>

                            <Link
                                to={`/Dictionary/search/${card['title']}`}
                                className="absolute bottom-4 right-4 duration-200 bg-violet-900 text-white px-3 py-1 rounded-3xl hover:bg-violet-700"
                            >
                                Know More
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
