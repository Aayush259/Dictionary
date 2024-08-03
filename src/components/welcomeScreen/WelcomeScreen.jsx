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
        <div className='welcome'>
            {
                wordCards.map(card => (
                    <div className='wordCard' key={card["title"]}>
                        <p className='title'>{card["title"]}</p>
                        <p className='welcomeWordDefinition'>{card["definition"]}</p>
                        <Link to={`/Dictionary/search/${card['title']}`} className={`knowMoreLink`}>
                            Know More
                        </Link>
                    </div>
                ))
            }
        </div>
        </>
    );
};
