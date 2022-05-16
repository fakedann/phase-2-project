import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import BookSelection from './BookSelection';
import ReviewForm from './ReviewForm';

function App() {

  const [books, setBooks] = useState({
    type: '',
    items: []
  })
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=VCLxI1f0Mv8l1IhdYJsSjWdpKAmryPV7`)
      .then( data => data.json())
      .then( d => setBooks({['type']: 'card', ['items']: [...d.results.books]}) )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(books)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home books={books} loading={loading}/> 
        </Route>
        <Route exact path="/book-selection">
          <BookSelection />
        </Route>
        <Route exact path="/review-book">
          <ReviewForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
