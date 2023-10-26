import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();

    const { loading } = useContext(AuthContext);

    return (
        <> {
            loading ? (
                <h2 className='text-center'>Loading news...</h2>
            ) : (
                <div>
                    {categoryNews ? (
                        <>
                            {
                                categoryNews.map(news => <NewsCard
                                    key={news._id}
                                    news={news}>
                                </NewsCard>)
                            }
                        </>
                    ) : (
                        <>
                            <div>Loading...</div>
                        </>
                    )}
                </div>
            )
        }

        </>

    )
}

export default Category;