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

//   if(results.type === 'card'){
//     const cardResult = <ListGroupItem><OverlayTrigger trigger="click" placement="right" overlay={popover}>
//   <Button variant="success">Add to database</Button>
//   </OverlayTrigger></ListGroupItem>
//   }else{
//     const tableResults = results.items.map( (tableObj, index) => <tr key={index}><td>{index}</td><td>{tableObj.author}</td><td>{tableObj.title}</td><td>{tableObj.publisher}</td><td>{tableObj.description}</td><td><OverlayTrigger trigger="click" placement="right" overlay={popover}>
//   <Button variant="success">Add to database</Button>
// </OverlayTrigger></td></tr>)
//   }




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
    fetch('https://evening-temple-49691.herokuapp.com/toys', {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({user: btnSrch, interactions: btnStates, comments: ''})
    })
      .then( r => r.json())
      .then( r => console.log(r))
    // fetch(`https://evening-temple-49691.herokuapp.com/toys/11`, {
    //   method: "DELETE"
    // })
    //   .then( r => r.json())
    //   .then( r => console.log(r))
    console.log('submitted')
  }

//   results.type === 'card' ? <ListGroupItem><OverlayTrigger trigger="click" placement="right" overlay={popover}>
//   <Button variant="success">Add to database</Button>
//   </OverlayTrigger></ListGroupItem>: results.items.map( (tableObj, index) => <tr key={index}><td>{index}</td><td>{tableObj.author}</td><td>{tableObj.title}</td><td>{tableObj.publisher}</td><td>{tableObj.description}</td><td><OverlayTrigger trigger="click" placement="right" overlay={popover}>
//   <Button variant="success">Add to database</Button>
// </OverlayTrigger></td></tr>)
  return results.type === 'card' ? <ListGroupItem><OverlayTrigger trigger="click" placement="right" overlay={popover}>
  <Button variant="success">Add to database</Button>
  </OverlayTrigger></ListGroupItem>: results.items.map( (tableObj, index) => <tr key={index}><td>{index}</td><td>{tableObj.author}</td><td>{tableObj.title}</td><td>{tableObj.publisher}</td><td>{tableObj.description}</td><td><OverlayTrigger trigger="click" placement="right" overlay={popover}>
  <Button variant="success">Add to database</Button>
</OverlayTrigger></td></tr>)
}

export default PopOv