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
  console.log(display.items)

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

  function sortDisplay(e){
    console.log(e.target)
    let aux = e.target.innerText.toLowerCase()

    // const sorted = display.items.sort(function(a, b) {
    //   const nameA = a.info[aux].toUpperCase(); // ignore upper and lowercase
    //   const nameB = b.info[aux].toUpperCase(); // ignore upper and lowercase
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }
    
    //   // names must be equal
    //   return 0;
    // });
    // setDisplay(sorted)
  }


  return (
    <div id="books">
    <h1 className="title">See what people are talking about in the book community</h1>
      <div id="search-list">
        <div className="search-item">

        <DiscoverSearch fetchInput={findItems}/>
        <h2 id="dynamicTitle">{display.type === 'init' ? 'LATEST 5 ENTRIES': 'SEARCH RESULTS'}</h2>
        <h5>Organize alphabetically by:</h5>
        <Button onClick={sortDisplay} variant="warning">Title</Button>{' '}
        <Button onClick={sortDisplay} variant="warning">Author</Button>{' '}
        <Button onClick={sortDisplay} variant="warning">Publisher</Button>{' '}

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