import React, { useState } from "react";
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function PopOv({results}){

  const [btnSrch, setBtn] = useState('')
  const [btnStates, setStates] = useState([])
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
            <label htmlFor="search">Enter Your Name:</label>
            <input type="text" value={btnSrch} placeholder="Daniel Escalona" onChange={e => setBtn(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
      </Popover.Body>
    </Popover>
  );

  const tableResults = results.items.map( (tableObj, index) => <tr key={index}><td>{index}</td><td>{tableObj.author}</td><td>{tableObj.title}</td><td>{tableObj.publisher}</td><td>{tableObj.description}</td><td><OverlayTrigger trigger="click" placement="right" overlay={popover}>
  <Button variant="success">Add to database</Button>
</OverlayTrigger></td></tr>)

  const cardResult = <ListGroupItem><OverlayTrigger trigger="click" placement="right" overlay={popover}>
  <Button variant="success">Add to database</Button>
</OverlayTrigger></ListGroupItem>

  function handleBtnClick(e) {
  
    if(e.target.className === "myBtns"){
      e.target.className = "btnClicked"
      setStates([...btnStates, e.target.innerText])
    }else{
      e.target.className = "myBtns"
      setStates( btnStates.filter( btnObj => btnObj !== e.target.innerText))
    }
    console.log(e.target.innerText)
  }
  
  function handleBtnSubmit(e) {
    e.preventDefault()
    console.log('submitted')
  }

  return results.type === 'card' ? cardResult: tableResults
}

export default PopOv