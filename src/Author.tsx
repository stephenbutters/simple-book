import React from 'react';
import "./Author.css";

interface AuthorData {
    thumbnailUrl: string;
    name: string;
    description: string;
}

class Author extends React.Component<AuthorData> {
    render(): React.ReactNode {
        return (
            <div className='author-container'>
                <img className='thumbnail' src={this.props.thumbnailUrl} alt='thumbnail'></img>
                <span className='follow'><i className="fa-solid fa-plus"></i>关注</span>
                <a className='name' href='/u'>{this.props.name}</a>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Author;