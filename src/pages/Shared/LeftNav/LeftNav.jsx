import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
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
                    <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>
                )}

            </div>

        </div>

    )
}

export default LeftNav;