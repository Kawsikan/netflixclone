import React from 'react';
import { BrowseContainer } from '../container/browser';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {

    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionFilter({ series, films });
    // passs to browser container
    return <BrowseContainer slides={slides} />;
}