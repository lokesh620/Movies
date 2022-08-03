import React from 'react';
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home.js';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MovieDetail from './components/movieDetail/movieDetail';
import PageNotFound from './components/pageNotFound/pageNotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App;

