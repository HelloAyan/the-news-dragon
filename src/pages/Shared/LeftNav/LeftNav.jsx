import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../App.css';


const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-helloayan-ayan-ahmed-rabbis-projects.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => { console.log(error) })
    }, [])

    console.log(categories);
    return (
        <div>
            <h5>All Category</h5>

            <div className='pt-4' style={{ width: '90%', height: '30px' }}>
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

        </div>

    )
}

export default LeftNav;