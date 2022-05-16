import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import PopOv from "./PopOv";

function CardItem({book, results, callModal}){
  return <Card border="dark" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ book['book_image'] ? book['book_image']: require("./book.jpeg")} alt="Card Image"/>
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Author: {book.author}</ListGroupItem>
            <ListGroupItem>Publisher: {book.publisher}</ListGroupItem>
            <ListGroupItem className="ranking">Rank: #{book.rank}</ListGroupItem>
            <PopOv results={results} callModal={callModal}/>
          </ListGroup>
        </Card> 
}

export default CardItem