import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function WordResult({wordData}) {

    // Getting word, phonetics, and meanings from wordData.
    const word = wordData[0]['word'];
    const phonetics = wordData[0]['phonetics'];
    const meanings = wordData[0]['meanings'];

    // State for the audio index which will play when it's corresponding button is cliked.
    const [audioPlayingIndex, setAudioPlayingIndex] = useState(null);

    return (
        <div className='result'>
            <p className='word'>{word}</p>
            <div className='wordDetails'>
                <div className='phonetics flex'>
                    {
                        phonetics.map((phonetic, index) => {
                            if (phonetic["text"] && phonetic["audio"]) {
                                return (
                                    <div className='phonetic flex' key={index}>
                                        <span className='phoneticText'>{phonetic["text"]}</span>
                                        <button className='voicePlayBtn' onClick={() => {setAudioPlayingIndex(index)}}>
                                        </button>
                                        {audioPlayingIndex === index && (<audio src={phonetic["audio"]} controls autoPlay onEnded={() => {setAudioPlayingIndex(null)}} style={{position: 'absolute', top: '-100vh'}}></audio>)}
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div className='meaningContainer'>
                    {
                        meanings.map((meaning, index) => {

                            return (
                                <div className='meaning' key={index}>
                                    <p className='partOfSpeechTitle'>{meaning["partOfSpeech"]}</p>
                                    {
                                        meaning["definitions"].map((definition, index) => {
                                            return (
                                                <div key={index}>
                                                    <p className='definition'>{definition["definition"]}</p>
                                                    {
                                                        definition["synonyms"].length > 0 && (<p className='synonym'><span>&nbsp;&mdash; Synonyms: </span>{definition["synonyms"].join(',')}</p>)
                                                    }
                                                    {
                                                        definition["antonyms"].length > 0 && (<p className='antonym'><span>&nbsp;&mdash; Antonyms: </span>{definition["antonyms"].join(',')}</p>)
                                                    }
                                                    {
                                                        definition["example"] && (<p className='example'><span>&nbsp;&mdash; Example: </span>{definition["example"]}</p>)
                                                    }

                                                </div>
                                            )
                                        })
                                    }
                                    {
                                        meaning["synonyms"].length > 0 && (<p className='synonym last'><span>Synonyms: </span>{meaning["synonyms"].join(', ')}</p>)
                                    }
                                    {
                                        meaning["antonyms"].length > 0 && (<p className='antonym last'><span>Antonyms: </span>{meaning["antonyms"].join(', ')}</p>)
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
    wordData: PropTypes.object.isRequired,
};
