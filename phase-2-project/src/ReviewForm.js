import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CardItem from './CardItem'
import DiscoverSearch from './DiscoverSearch'

function ReviewForm(){

  const [dataBase, setDataBase] = useState({type: '', items: []})

  const [show, setShow] = useState(false);
  const [condModal, setModal] = useState(true)

  const [display, setDisplay] = useState({type: '', items: []})
  console.log(display.items.length)

  useEffect(() => {
    fetch('https://evening-temple-49691.herokuapp.com/toys')
      .then( data => data.json() )
      .then( data => {
        setDataBase({['type']: 'discover', ['items']: data.filter(book => book.info ? book:undefined)})
        setDisplay({['type']: 'init', ['items']: data.filter( bookObj => bookObj.id > data.length-5)})
      })
  }, []);

  function callModal(resp){
    setShow(resp)
    setModal(resp)
    setTimeout(() => {
      setShow(false)
    }, 500);
  }

  function findItems(data, tipo){
    setDisplay({['type']: 'notinit', ['items']: dataBase.items.filter( bookObj => bookObj.info[tipo] === data)})
    
  }


  return (
    <div id="books">
    <h1 className="title">See what people are talking about in the book community</h1>
      <div id="search-list">
        <div className="search-item">

        <DiscoverSearch fetchInput={findItems}/>
        <h2 id="dynamicTitle">{display.type === 'init' ? 'LATEST 5 ENTRIES': 'SEARCH RESULTS'}</h2>

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

        { display.items.map( bookObj => <CardItem key={bookObj.id} book={bookObj} results={dataBase}/>)}

        {/* display.map( bookObj => <CardItem key={bookObj.id} book={bookObj} results={dataBase}/>): topFiveBooks.map( bookObj => <CardItem key={bookObj.id} book={bookObj} results={dataBase}/>) */}
      
        </div>
      </div>
    </div>
  )
}

export default ReviewForm