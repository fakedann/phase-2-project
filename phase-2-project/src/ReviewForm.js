import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardItem from './CardItem'

function ReviewForm(){

  const [dataBase, setDataBase] = useState({type: '', items: []})

  const [show, setShow] = useState(false);
  const [condModal, setModal] = useState(true)

  console.log(dataBase)

  useEffect(() => {
    fetch('https://evening-temple-49691.herokuapp.com/toys')
      .then( data => data.json() )
      .then( data => {
        setDataBase({['type']: 'discover', ['items']: [...data]})
      })
  }, []);

  function callModal(resp){
    setShow(resp)
    setModal(resp)
    setTimeout(() => {
      setShow(false)
    }, 500);
  }


  return (
    <div id="books">
    <h1 className="title">See what people are talking about in the book community</h1>
      <div id="search-list">
        <div className="search-item">

        {/* <BookSearch fetchInput={fetchInput}/> */}

            <Modal
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
        </Modal>

        { dataBase.items.length > 3 ? <CardItem book={dataBase[15]} results={dataBase}/>: null}
      
        </div>
      </div>
    </div>
  )
}

export default ReviewForm