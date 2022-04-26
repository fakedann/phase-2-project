import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import CardItem from "./CardItem";

function Home({books, loading}){

  const [expand, setExpand] = useState(false)
  const displayedCards = books.map( bookObj => <CardItem key={bookObj.title} book={bookObj}/>)
  const topFiveBooks = []
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
          </div>
        </div>
      </div>
    </div>  
  )
  
}

export default Home