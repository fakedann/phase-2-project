import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import CardItem from "./CardItem";
import Modal from 'react-bootstrap/Modal'

function Home(){

  const [expand, setExpand] = useState(false)
  const [books, setBooks] = useState({
    type: '',
    items: []
  })
  const [loading, setLoading] = useState(false);

  const displayedCards = books.items.map( bookObj => <CardItem key={bookObj.title} book={bookObj} results={books} callModal={callModal}/>)
  const topFiveBooks = []

  const [show, setShow] = useState(false);
  const [condModal, setModal] = useState(true)

  console.log(process.env.REACT_APP_KEY);


  useEffect(() => {
    setLoading(true);
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_KEY}`)
      .then( data => data.json())
      .then( d => setBooks({['type']: 'card', ['items']: [...d.results.books]}) )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  for(let i=0; i<5; i++){
    topFiveBooks.push(displayedCards[i])
  }

  function handleClick(e){
    if(e.target.innerText === "Expand"){
      e.target.innerText = "Collapse"
    }else{
      e.target.innerText = "Expand"
    }
    setExpand(!expand)
  }

  function callModal(resp){
    setShow(true)
    setModal(resp)
    if(resp === true){
      setTimeout(() => {
        setShow(false)
      }, 2000);
    }
  }
  
  if (loading) {
    return <h1>Data is loading...</h1>;
  }

  return (
    <div className="home">
      <h1 className="title">Welcome to the New York Time's Best Seller Website!</h1>
      <h3>Dive into this week's best-seller list...</h3>
      <div id="books">
        <div id="book-list">
          <div className="book-item">
            {expand ? displayedCards: topFiveBooks}
            <Button id="expBtn" onClick={handleClick} variant="success">Expand</Button>{' '}
            {<Modal
            show={show}
            onHide={() => setShow(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {condModal ? 'Success!' :'Invalid input. Please, try again.'}
            </Modal.Body>
          </Modal>}
          </div>
        </div>
      </div>
    </div>  
  )
  
}

export default Home