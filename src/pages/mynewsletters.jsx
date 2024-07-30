import React from 'react';
import { Link } from 'react-router-dom';
import ListingNewsletters from '../listing/listingnewsletters';

const MyNewsletters = () => {
    return (
        <>
            <h2>Here are the newsletters</h2>
            <Link to="/mynewsletters/create">
                <button>
                    Add a new newsletter
                </button>
            </Link>
            <ListingNewsletters/>


        </>
    );
};

export default MyNewsletters;
