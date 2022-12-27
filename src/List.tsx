import React from 'react';
import Card from './Card';
import Author from './Author';
import "./List.css";

interface ListState {
    cards: any[],
    authors: any[]
};

class List extends React.Component<{}, ListState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cards: [],
            authors: []
        };
    }

    async componentDidMount() {
        const cardResponse = await fetch("http://localhost:49160/api/cards");
        let cardData = await cardResponse.json();
        if (!cardData) {
            cardData = [];
        }

        const authorResponse = await fetch("http://localhost:49160/api/authors");
        let authorData = await authorResponse.json();
        if (!authorData) {
            authorData = [];
        }

        this.setState({
            cards: cardData,
            authors: authorData
        });
    }

    render() {
        return (
            <div className="container">
                <div className="list-container">
                    {this.state.cards.map(item => (
                        <Card 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            author={item.author}
                            diamond={item.diamond}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    ))}
                </div>
                <div className="recommended-container">
                    <span className='author-title'>推荐作者</span>
                    {this.state.authors.map(author => (
                        <Author
                            key={author.name}
                            thumbnailUrl={author.thumbnailUrl}
                            name={author.name}
                            description={author.description}
                        />
                    ))}
                    <button className="check-more">查看全部  <i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        );
    }
}

export default List;