import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NotFoundError({ wordData }) {

  // Getting word from route URL.
  const { searchWordParam } = useParams();

  return (
    <div className="w-[95%] mx-auto text-lg">
      <p
        className="text-xl sm:text-2xl text-red-600 my-2"
      >
        {wordData["title"]}
      </p>

      <p>{wordData["message"]}</p>

      <p className="my-2">{wordData["resolution"]}</p>

      <a
        className="text-violet-950 underline underline-offset-4 hover:text-violet-700"
        href={`https://www.google.com/search?q=${searchWordParam}%20meaning`}
        target='_blank'
      >
        Find on Google - {searchWordParam}
      </a>
    </div>
  );
};

NotFoundError.propTypes = {
  wordData: PropTypes.object.isRequired,
};
