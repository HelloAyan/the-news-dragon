import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../App.css';
import Featured from '../FeaturedPost/Featured';
import Spinner from 'react-bootstrap/Spinner';


const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://the-news-dragon-server-helloayan-ayan-ahmed-rabbis-projects.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }, [])

    console.log(categories);
    return (
        <>
            <div className='pb-5'>
                <h5>All Category</h5>

                {isLoading ? (
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <div className='pt-4' style={{ width: '100%', height: 'auto' }}>
                        {categories.map(category =>
                            <div key={category.id} className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }>
                                <div className='category-item-name'><NavLink to={`/category/${category.id}`} className='text-decoration-none ps-4 '>{category.name}</NavLink></div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div>
                <Featured></Featured>
            </div>

        </>

    )
}

export default LeftNav;