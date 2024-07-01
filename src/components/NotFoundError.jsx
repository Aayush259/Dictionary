import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NotFoundError({ wordData }) {

  // Getting word from route URL.
  const { searchWordParam } = useParams();

  return (
    <div className='error'>
        <p className='errorTitle'>{wordData["title"]}</p>
        <p className='errorDescription'>{wordData["message"]}</p>
        <p className='errorResolution'>{wordData["resolution"]}</p>
        <a className='linkToGoogle' href={`https://www.google.com/search?q=${searchWordParam}%20meaning`} target='_blank'>Find on Google - {searchWordParam}</a>
    </div>
  );
};

NotFoundError.propTypes = {
  wordData: PropTypes.object.isRequired,
};
