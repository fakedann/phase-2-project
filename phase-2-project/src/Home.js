import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function Home(){
  return (
  <div className="home">
    <h1 id="title">Welcome to Daniel's Website!</h1>
    <div id="books">
      <div id="book-list">
        <div className="book-item">
          <Card border="dark" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('./book.jpeg')} alt="Card Image"/>
            <Card.Body>
              <Card.Title>dlaksdjdsadsaaddasdasdsadasadsdasdsadsdddddddddlaksdjdsadsaaddasdasdsadasadsdasdsadsdddddddddddlaksdjdsadsaaddasdasdsadasadsdasdsadsdddddddddddlaksdjdsadsaaddasdasdsadasadsdasdsadsdddddddddddd</Card.Title>
              <Card.Text>
                Some quick ple text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Author:</ListGroupItem>
              <ListGroupItem>Company:</ListGroupItem>
              <ListGroupItem>Country:</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <div className="book-item">
          <Card border="dark" style={{ width: '18rem' }}>
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
        </div>
      </div>
    </div>
  </div>  
  )
}

export default Home