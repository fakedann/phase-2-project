import React, { useState } from "react";
import CardItem from "./CardItem";
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function BookSelection(){

  const [searchData, setSearch] = useState('')
  const [checkedStatus, setChecked] = useState('date')
  const [results, setResults] = useState([])
  // const displayedCards = results.map( bookObj => <CardItem key={bookObj.title} book={bookObj}/>)
  const tableResults = results?.map( (tableObj, index) => <tr key={index}><td>{index}</td><td>{tableObj.author}</td><td>{tableObj.title}</td><td>{tableObj.publisher}</td><td>{tableObj.description}</td></tr>)

  const [show, setShow] = useState(false);
  const [condModal, setModal] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const table = <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Author</th>
      <th>Title</th>
      <th>Publisher</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {tableResults}
  </tbody>
</Table>
  


  function handleSubmit(e){
    e.preventDefault()
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
          console.log(data)
          console.log(results)
          setModal(true)
          setShow(handleShow)
          setTimeout(() => {
            handleClose()
          }, 1000);
          setResults(data.results.books)
          
        } )
        .catch( (err) => {
          console.log(err)
          setModal(false)
          setShow(handleShow)
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
          console.log(data)
          console.log(data.results[0].isbns[0].isbn10)
          setModal(true)
          setShow(handleShow)
          setTimeout(() => {
            handleClose()
          }, 1000);
          setResults(data.results)
          
        } )
        .catch( (err) => {
          console.log(err)
          setModal(false)
          setShow(handleShow)
        })
      } catch(e){
        console.error(e)
      }
    }
  }

  function handleChange(e){
    setChecked(e.target.value)
  }

  return (

    <div id="books">
      <h1 className="title">Search for our weekly rankings, authors, or publishing companies</h1>
        <div id="search-list">
          <div className="search-item">

          <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input id="srchBar" type="text" value={searchData} placeholder="2021-02-27, The Diamond Eye, Lucy Foley, or Morrow... " onChange={e => setSearch(e.target.value)}/>
            <button type="submit">Submit</button>
            <div className="radio">
              <label>Date</label>
              <input type="radio" value="date" onChange={handleChange} checked={checkedStatus === "date"}/>
              <label>Title</label>
              <input type="radio" value="title" onChange={handleChange} checked={checkedStatus === "title"}/>
              <label>Author</label>
              <input type="radio" value="author" onChange={handleChange} checked={checkedStatus === "author"}/>
              <label>Publisher</label>
              <input type="radio" value="publisher" onChange={handleChange} checked={checkedStatus === "publisher"}/>
            </div>
           
          </form>
              <Modal
            show={show}
            onHide={handleClose}
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
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>


          {checkedStatus === 'date' ? null: table}
          </div>
        </div>
      </div>
  
  )
}

export default BookSelection