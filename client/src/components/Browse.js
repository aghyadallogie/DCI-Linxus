import React, { useState } from 'react';
import Account from './Account';
import Filter from './Filter';
import Results from './Results';

export const Browse = props => {
    const { route } = props;

    let browseContent;
    if (route === '/filter') {
        browseContent = <Filter />
    } else if (route === '/account') {
        browseContent = <Account />
    } else if (route === '/results') {
        browseContent = <Results />
    }

    return (
        <div>
            {browseContent}
        </div>
    )
}
