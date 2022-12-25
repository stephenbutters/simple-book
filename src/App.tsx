import React from 'react';
import Detail from './Detail';
import List from './List';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/' element={<List />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;