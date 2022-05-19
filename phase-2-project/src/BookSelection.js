import React, { useState } from "react";
import CardItem from "./CardItem";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import BookSearch from "./BookSearch";
import TableItem from "./TableItem";

function BookSelection(){

  const [results, setResults] = useState({
    type: '',
    items: []
  })

  const [show, setShow] = useState(false);
  const [condModal, setModal] = useState(true)
  const [resultTitle, setTitle] = useState('')
  console.log(results)

  function fetchInput(searchData, checkedStatus){

    setTitle(searchData)
    if(checkedStatus === 'date'){
      try{
        fetch(`https://api.nytimes.com/svc/books/v3/lists/${searchData}/hardcover-fiction.json?api-key=VCLxI1f0Mv8l1IhdYJsSjWdpKAmryPV7`)
        .then( data => {
          if(data.ok){
            return data.json();
          }  
          else{
            throw new Error("Status code error :" + data.status)
          } 
        } )
        .then( data => {
          setResults({['type']: 'card', ['items']: [...data.results.books]})
          callModal(true)
          
        } )
        .catch( (err) => {
          console.log(err)
          callModal(false)
          
        })
      } catch(e){
        console.error(e)
      }
      
    } else{
      try{
        fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?${checkedStatus}=${searchData}&api-key=VCLxI1f0Mv8l1IhdYJsSjWdpKAmryPV7`)
        .then( data => {
          if(data.ok){
            return data.json();
          }  
          else{
            throw new Error("Status code error :" + data.status)
          } 
        } )
        .then( data => {
          setResults({['type']: 'table', ['items']: [...data.results]})
          callModal(true)
        } )
        .catch( (err) => {
          console.log(err)
          callModal(false)
        })
      } catch(e){
        console.error(e)
      }
    }
  }

  function callModal(resp){
    setShow(true)
    setModal(resp)
    if(resp === true){
      setTimeout(() => {
        setShow(false)
      }, 500);
    }
  }
  return (

    <div id="books">
      <h1 className="title">Search for our weekly rankings, authors, or publishing companies</h1>
        <div id="search-list">
          <div className="search-item">

          <BookSearch fetchInput={fetchInput}/>
          {resultTitle !== '' ? <h5 id="srchBook" >SEARCH RESULTS FOR: {resultTitle}</h5>: null}

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


          {results.type === '' ? null: (results.type === 'card' ? results.items.map( bookObj => <CardItem key={bookObj.title} book={bookObj} results={results} callModal={callModal}/>): <TableItem results={results} callModal={callModal}/>)}
          </div>
        </div>
      </div>
  
  )
}

export default BookSelection