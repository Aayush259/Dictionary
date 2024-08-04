import React from 'react';

export default function Loader() {
  return (
    <div
      className="flex flex-row items-center justify-center h-[70vh]"
    >
      {
        ['animate-loading1', 'animate-loading2', 'animate-loading3'].map(animation => (
          <div
            key={animation}
            className={`w-3 h-3 m-1 rounded-full bg-slate-900 dark:bg-violet-200 opacity-0 ${animation}`}
          ></div>
        ))
      }
    </div>
  );
};
