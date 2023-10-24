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

            <div className='ps-4'>
                {categories.map(category =>
                    <p key={category.id} className='active'>
                        <NavLink to={`/category/${category.id}`} className='text-decoration-none '>{category.name}</NavLink>
                    </p>
                )}

            </div>

        </div>

    )
}

export default LeftNav;