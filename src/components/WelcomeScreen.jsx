import React from 'react';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WordDataContext } from '../contexts/WordDataContext';

export default function WelcomeScreen() {

    const { setHomeLinkActive } = useContext(WordDataContext);

    // Home state is active when this component is rendered.
    useEffect(() => {
        setHomeLinkActive(true);
    })

    // Array of objects for initial word cards.
    const wordCards = [
        {
            title: `Hello`,
            definition: `A greeting (salutation) said when meeting someone or acknowledging someone's arrival or presence.`
        },
        {
            title: `Genius`,
            definition: `Someone possessing extraordinary intelligence or skill; especially somebody who has demonstrated this by a creative or original work in science, music, art etc.`
        },
        {
            title: `Welcome`,
            definition: `The act of greeting someone's arrival.`
        },
        {
            title: `Mistake`,
            definition: `An error; a blunder.`
        }
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
