import React from 'react';

export default function NotFoundError({ wordData }) {

  return (
    <div className='error'>
        <p className='errorTitle'>{wordData["title"]}</p>
        <p className='errorDescription'>{wordData["message"]}</p>
        <p className='errorResolution'>{wordData["resolution"]}</p>
        <a className='linkToGoogle' href={`https://www.google.com/search?q=${wordData.title}%20meaning`} target='_blank'>Find on Google - {wordData.title}</a>
    </div>
  );
};
