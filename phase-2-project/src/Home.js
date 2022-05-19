import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import CardItem from "./CardItem";
import Modal from 'react-bootstrap/Modal'

function Home({books, loading}){

  const [expand, setExpand] = useState(false)
  const displayedCards = books.items.map( bookObj => <CardItem key={bookObj.title} book={bookObj} results={books} callModal={callModal}/>)
  const topFiveBooks = []

  const [show, setShow] = useState(false);
  const [condModal, setModal] = useState(true)

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
 

  // const start = new Date("04/05/2020");
  // const end = new Date("02/10/2020");
  // console.log(text)
  // let loop = new Date(start);
  // while (loop >= end) {
  //   console.log(loop);
  //   let newDate = loop.setDate(loop.getDate() - 7);
  //   const text = loop.toISOString().split('T')[0]
  //   fetch(`https://api.nytimes.com/svc/books/v3/lists/${text}/hardcover-fiction.json?api-key=VCLxI1f0Mv8l1IhdYJsSjWdpKAmryPV7`)
  //   .then( data => data.json())
  //   .then( d => console.log(d) )
  //   loop = new Date(newDate);
  // }

  
  if (loading) {
    return <h1>Data is loading...</h1>;
  }

  return (
    <div className="home">
      <h1 className="title">Welcome to Daniel's Website!</h1>
      <h3>Here's this week's best-seller list..</h3>
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
              <Modal.Title>Notification!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {condModal ? 'Success!' :'Invalid input. Please, try again.'}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>}
          </div>
        </div>
      </div>
    </div>  
  )
  
}

export default Home