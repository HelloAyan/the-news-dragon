import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hook/useTitle';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    useTitle('Home');

    const { loading } = useContext(AuthContext);

    return (
        <> {
            loading ? (
                <h3 className='text-center'>Loading news...</h3>
            ) : (
                <div>
                    {
                        categoryNews.map(news => <NewsCard
                            key={news._id}
                            news={news}>
                        </NewsCard>)
                    }

                </div>
            )
        }

        </>

    )
}

export default Category;