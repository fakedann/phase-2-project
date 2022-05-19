import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import PopOv from "./PopOv";

function CardItem({book, results, callModal}){

  let card

  if (results.type === 'card'){
    card = <Card border="dark" style={{ width: '18rem' }}>
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
  }else{
    card = <Card border="dark" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ book.info.image ? book.info.image: require("./book.jpeg")} alt="Card Image"/>
    <Card.Body>
      <Card.Title>{book.info.title}</Card.Title>
      <Card.Text>
        {`"${book.comments}"`}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>User: {book.user}</ListGroupItem>
      <ListGroupItem>Author: {book.info.author}</ListGroupItem>
      <ListGroupItem >Publisher: {book.info.publisher}</ListGroupItem>
      <ListGroupItem >Interactions: {book.interactions.map( (bookObj, index) => {
        if(index < book.interactions.length-1 ){
          return `${bookObj}, `
        }else{
          return bookObj
        }
        
      })}</ListGroupItem>
    </ListGroup>
  </Card>
  }


  return card
}

export default CardItem