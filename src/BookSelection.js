import React, { useState } from "react";
import CardItem from "./CardItem";
import Modal from 'react-bootstrap/Modal'
import BookSearch from "./BookSearch";
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';

function BookSelection(){

  const [results, setResults] = useState({
    type: '',
    items: []
  })

  const [show, setShow] = useState(false);
  const [condModal, setModal] = useState(true)
  const [resultTitle, setTitle] = useState('')


  function fetchInput(searchData, checkedStatus){

    if(searchData === ''){
      callModal(false)
    }else{
      setTitle(searchData)
    if(checkedStatus === 'date'){
      let validDate = moment(searchData, 'YYYY-MM-DD',true).isValid();
      if(validDate){
        try{
          fetch(`https://api.nytimes.com/svc/books/v3/lists/${searchData}/hardcover-fiction.json?api-key=${process.env.REACT_APP_KEY}`)
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
            
          } )
          .catch( (err) => {
            console.log('daddad')
            setResults({['type']: 'card', ['items']: []})
            
          })
        } catch(e){
          console.error(e)
        }
      }else{
        setResults({['type']: 'card', ['items']: []})
        callModal(false)
      }
      
    } else{
      try{
        fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?${checkedStatus}=${searchData}&api-key=${process.env.REACT_APP_KEY}`)
        .then( data => {
          if(data.ok){
            return data.json();
          }  
          else{
            throw new Error("Status code error :" + data.status)
          } 
        } )
        .then( data => {
          setResults({['type']: 'card', ['items']: [...data.results]})
        } )
        .catch( (err) => {
          setResults({['type']: 'card', ['items']: []})
        })
      } catch(e){
        console.error(e)
      }
    }
    }

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
  return (

    <div id="books">
      <h1 className="title">Search for past weekly rankings, authors, or publishing companies</h1>
        <div id="search-list">
          <div className="search-item">

          <BookSearch fetchInput={fetchInput}/>
          {resultTitle !== '' ? <h5 id="srchBook" >SEARCH RESULTS FOR: {resultTitle}</h5>: null}
          {results.items.length === 0 && resultTitle !== ''? <h6>NO RESULTS</h6>: null}

              <Modal
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
  
          </Modal>


          {results.type === '' ? null: results.items.map( (bookObj, index) => <CardItem key={index} book={bookObj} results={results} callModal={callModal}/>)}
          </div>
        </div>
      </div>
  
  )
}

export default BookSelection