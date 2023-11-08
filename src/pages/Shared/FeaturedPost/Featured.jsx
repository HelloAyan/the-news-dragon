import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import { FaRegCalendar } from 'react-icons/fa';

const Featured = () => {

    const [category, setCategories] = useState([]);
    const { _id, title, details, image_url, author, total_view, rating } = category;
    console.log('data is ', category.name)


    console.log('Featured is:', category);

    useEffect(() => {
        fetch('https://the-news-dragon-server-helloayan-ayan-ahmed-rabbis-projects.vercel.app/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => { console.log(error) })
    }, [])
    return (
        <div>
            <Card className='mb-4' >
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                    <Card.Text className='pt-3'>
                        <div className='d-flex justify-content-between'>
                            <div className='fs-6 fw-semibold'>Sports</div>
                            <div> <FaRegCalendar></FaRegCalendar> <span>Jan 4, 2022</span> </div>
                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='mb-4'>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                    <Card.Text className='pt-3'>
                        <div className='d-flex justify-content-between'>
                            <div className='fs-6 fw-semibold'>Sports</div>
                            <div> <FaRegCalendar></FaRegCalendar> <span>Jan 4, 2022</span> </div>
                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
            <Card >
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                    <Card.Text className='pt-3'>
                        <div className='d-flex justify-content-between'>
                            <div className='fs-6 fw-semibold'>Sports</div>
                            <div> <FaRegCalendar></FaRegCalendar> <span>Jan 4, 2022</span> </div>
                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Featured;