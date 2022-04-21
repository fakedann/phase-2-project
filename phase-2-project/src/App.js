import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch } from "react-router-dom";
import BookSelection from './BookSelection';
import ReviewForm from './ReviewForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <p>Home page</p>
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
