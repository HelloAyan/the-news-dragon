import moment from 'moment';
import React from 'react'
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '35px' }} src={author?.img} roundedCircle alt='Author Image' title='Author Img' />
                <div className='ps-2 flex-grow-1' >
                    <p className='m-0 p-0'>{author?.name}</p>
                    <p className='m-0 p-0'><small>  {moment(author.published_date).format("YYYY-MM-D")} </small> </p>
                </div>
                <div>
                    <FaRegBookmark  ></FaRegBookmark>
                    <FaShareAlt className='ms-1'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-start ">
                <div className=' flex-grow-1'>
                    <Rating className='me-1'
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    />
                    <span className='pt-1'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>

            </Card.Footer>
        </Card>
    )
}

export default NewsCard;