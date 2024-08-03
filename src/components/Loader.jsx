import React from 'react';

export default function Loader() {
  return (
    <div className='loaderContainer flex'>
      {
        Array.from({length: 3}, ((_, index) => (
          <div key={index} className="circle"></div>
        )))
      }
    </div>
  );
};
