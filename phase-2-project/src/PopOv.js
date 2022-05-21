import React, { useState } from "react";
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function PopOv({results, callModal}){

  const [user, setUser] = useState('')
  const [commentInput, setComment] = useState('')
  const [btnStates, setStates] = useState([])
  const [bookInfo, setBookInfo] = useState({title: '', author: '', publisher: '', image: ''})
  // console.log(btnStates)

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Tell us about your experience:</Popover.Header>
      <Popover.Body>
        <button className="myBtns" onClick={handleBtnClick} variant="warning">Have Read</button>
        <button className="myBtns" onClick={handleBtnClick}  variant="warning">Will Read</button>
        <button className="myBtns" onClick={handleBtnClick} >Liked</button>
        <button className="myBtns" onClick={handleBtnClick} >Disliked</button>
        <form onSubmit={handleBtnSubmit}>
            <label className="nameLabel" htmlFor="search">Enter Your Name:</label>
            <input type="text" value={user} placeholder="Daniel Escalona" onChange={e => setUser(e.target.value)}/>
            <label className="commentLabel" htmlFor="search">Share your Comments:</label>
            <input className="commentInput" type="text" value={commentInput} placeholder="Wonderful book!" onChange={e => setComment(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
      </Popover.Body>
    </Popover>
  );

  function handleBtnClick(e) {
  
    if(e.target.className === "myBtns"){
      e.target.className = "btnClicked"
      setStates([...btnStates, e.target.innerText])
    }else{
      e.target.className = "myBtns"
      setStates( btnStates.filter( btnObj => btnObj !== e.target.innerText))
    }
  }
  
  function handleBtnSubmit(e) {
    e.preventDefault()

    console.log(user)
    if(user.trim() === '' || /[^a-zA-Z]/.test(user)){
      callModal(false)
    }else{
      fetch('https://evening-temple-49691.herokuapp.com/toys', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({user: user, info: bookInfo, interactions: btnStates, comments: commentInput})
    })
      .then( r => r.json())
      .then( r => callModal(true))
      .catch( err => {
        console.log(err)
        callModal(false)
      })
    }
    
    // fetch(`https://evening-temple-49691.herokuapp.com/toys/11`, {
    //   method: "DELETE"
    // })
    //   .then( r => r.json())
    //   .then( r => console.log(r))
    console.log('submitted')
  }

  function retrieveBookInfo(e){
  
    setBookInfo({['title']: e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText, ['author']: e.target.parentNode.parentNode.children[0].innerText.split(": ")[1], ['publisher']: e.target.parentNode.parentNode.children[1].innerText.split(": ")[1], ['image']: e.target.parentNode.parentNode.parentNode.children[0].src})
  }

  return results.type === 'card' ? <ListGroupItem><OverlayTrigger trigger="click" placement="right" overlay={popover}>
  <Button onClick={retrieveBookInfo} variant="success">Thoughts?</Button>
  </OverlayTrigger></ListGroupItem>: null}

export default PopOv