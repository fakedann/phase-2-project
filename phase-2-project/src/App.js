import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch } from "react-router-dom";
import BookSelection from './BookSelection';
import ReviewForm from './ReviewForm';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <p>Home page</p>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('./book.jpeg')} alt="Card Image"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick ple text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
          
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
