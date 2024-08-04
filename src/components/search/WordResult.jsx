import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function WordResult({ wordData }) {

    // Getting word, phonetics, and meanings from wordData.
    const word = wordData[0]['word'];
    const phonetics = wordData[0]['phonetics'];
    const meanings = wordData[0]['meanings'];

    // State for the audio index which will play when it's corresponding button is cliked.
    const [audioPlayingIndex, setAudioPlayingIndex] = useState(null);

    return (
        <div
            className="w-[95%] mx-auto mb-10 text-slate-800 dark:text-violet-100"
        >
            <p
                className="text-violet-900 capitalize text-2xl sm:text-3xl font-semibold dark:text-violet-300"
            >
                {word}
            </p>
            <div className="pl-1">

                <div
                    className="flex justify-start gap-10 my-3 opacity-80 flex-wrap"
                >
                    {
                        phonetics.map((phonetic, index) => {
                            if (phonetic["text"] && phonetic["audio"]) {
                                return (
                                    <div
                                        key={index}
                                        className="flex gap-2"
                                    >
                                        <span className='phoneticText'>{phonetic["text"]}</span>

                                        <button
                                            className="h-5 w-5"
                                            onClick={() => { setAudioPlayingIndex(index) }}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-solid fa-volume-high"
                                            />
                                        </button>

                                        {audioPlayingIndex === index && (<audio src={phonetic["audio"]} controls autoPlay onEnded={() => { setAudioPlayingIndex(null) }} className="absolute top-[-100vh]"></audio>)}
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div>
                    {
                        meanings.map((meaning, index) => {

                            return (
                                <div
                                    key={index}
                                    className="text-lg sm:text-xl"
                                >
                                    <p
                                        className="text-xl sm:text-2xl text-violet-900 capitalize mt-4  dark:text-violet-300"
                                    >
                                        🔹{meaning["partOfSpeech"]}
                                    </p>
                                    {
                                        meaning["definitions"].map((definition, index) => {
                                            return (
                                                <div 
                                                key={index}
                                                className="pl-9"
                                                >
                                                    <p>
                                                        {definition["definition"]}
                                                    </p>
                                                    {
                                                        definition["synonyms"].length > 0 && (<p className="my-1"><span className="font-bold">&nbsp;&mdash; Synonyms: </span>{definition["synonyms"].join(',')}</p>)
                                                    }
                                                    {
                                                        definition["antonyms"].length > 0 && (<p className="my-1"><span className="font-bold">&nbsp;&mdash; Antonyms: </span>{definition["antonyms"].join(',')}</p>)
                                                    }
                                                    {
                                                        definition["example"] && (<p className="my-1"><span className="font-bold">&nbsp;&mdash; Example: </span>{definition["example"]}</p>)
                                                    }

                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        meaning["synonyms"].length > 0 && (<p className="pl-10 my-1"><span className="font-bold">Synonyms: </span>{meaning["synonyms"].join(', ')}</p>)
                                    }
                                    {
                                        meaning["antonyms"].length > 0 && (<p className="pl-10 my-1"><span className="font-bold">Antonyms: </span>{meaning["antonyms"].join(', ')}</p>)
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

WordResult.propTypes = {
    wordData: PropTypes.array.isRequired,
};
