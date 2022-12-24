import './App.css';
import React from 'react';
import Card from './Card';
import Author from './Author';
import Detail from './Detail';
import { cards, authors } from './mock';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

class App extends React.Component {
  private cards: any[];
  private authors: any[];

  constructor(props: any) {
    super(props);
    this.cards = cards;
    this.authors = authors;
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/' element={this.renderMainPage()}/>
        </Routes>
      </BrowserRouter>
    );
  }

  private renderMainPage() {
    return (
      <div className="container">
        <div className="list-container">
          {this.cards.map(item => (
            <Card 
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
          {this.authors.map(author => (
            <Author
              thumbnailUrl={author.thumbnailUrl}
              name={author.name}
              description={author.description}
            />
          ))}
          <button className='check-more'>查看全部  <i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    );
  }
}

export default App;