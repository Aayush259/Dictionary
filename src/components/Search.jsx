import React from 'react';
import { useContext, useEffect } from 'react';
import { WordDataContext } from '../contexts/WordDataContext';
import Input from './Input';

export default function Search() {

    // Getting outputSection and setHomeLinkActive setter from WordDataContext.
    const { outputSection, setHomeLinkActive } = useContext(WordDataContext);

    // Setting home link active state to false.
    useEffect(() => {
        setHomeLinkActive(false);
    });

    return (
        <>
        <Input />
        {outputSection}
        </>
    );
};