import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

interface CardProps {
    id: number;
    title: string;
    content: string;
    author: string;
    diamond: number;
    comments: number;
    likes: number;
}

class Card extends React.Component<CardProps> {
    render(): React.ReactNode {
        return (
            <div className='card'>
                <Link className='title' to={"/detail/" + this.props.id}>{this.props.title}</Link>
                <p className='abstract'>{this.props.content}</p>
                <div className='meta'>
                    <span className='diamond'>
                        <i className="fa-regular fa-gem"></i>
                        {" " + this.props.diamond + " "}
                    </span>
                    <a className='author' target='_blank' href='/'>{this.props.author}</a>
                    <span className='comment'>
                        <i className="fa-solid fa-comment"></i>
                        {" " + this.props.comments + " "}
                    </span>
                    <span className='like'>
                        <i className="fa-solid fa-heart"></i>
                        {" " + this.props.likes + " "}
                    </span>
                </div>
            </div>
        );
    }
}

export default Card;