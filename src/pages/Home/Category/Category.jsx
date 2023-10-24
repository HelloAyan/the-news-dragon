import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    const [loading, setLoading] = useState(false);

    return (
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



            {/* {id && <h2>This is Category : {id} , {categoryNews.length}</h2>} */}

        </div>
    )
}

export default Category;