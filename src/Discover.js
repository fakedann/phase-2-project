import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import CardItem from './CardItem'
import DiscoverSearch from './DiscoverSearch'

function ReviewForm(){

  const [dataBase, setDataBase] = useState({type: '', items: []})

  const [display, setDisplay] = useState({type: '', items: []})
  const [hideComponent, setHide] = useState(false)
  const [resultTitle, setTitle] = useState('')

  useEffect(() => {
    fetch('https://evening-temple-49691.herokuapp.com/books')
      .then( data => data.json() )
      .then( data => {
        setDataBase({['type']: 'discover', ['items']: data.filter(book => book.info ? book:undefined)})
        setDisplay({['type']: 'init', ['items']: data.filter( bookObj => bookObj.id > data.length-5)})
      })
  }, []);

  function findItems(data, tipo){
    setTitle(data)
    setDisplay({['type']: 'notinit', ['items']: dataBase.items.filter( bookObj => bookObj.info[tipo].toLowerCase().includes(data.trim().toLowerCase()))})
    
  }

  function sortDisplay(e){
    console.log(e.target)
    let aux = e.target.innerText.toLowerCase()

    const sorted = display.items.sort(function(a, b) {
      const nameA = a.info[aux].toUpperCase(); // ignore upper and lowercase
      const nameB = b.info[aux].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    setDisplay({...display, ['items']: [...sorted]})
  }

  function showComponent(e){
    setHide(true)
    e.target.remove()
  }

  function goBacktoFive(){
    setDisplay({['type']: 'init', ['items']: dataBase.items.filter( bookObj => bookObj.id > dataBase.items.length-5)})
  }

  return (
    <div id="books">
    <h1 className="title">See what people are talking about in the book community</h1>
      <div id="search-list">
        <div className="search-item">

        <Button onClick={showComponent} id="initialBtn" >Advanced Search</Button>{' '}
        {hideComponent ? <DiscoverSearch fetchInput={findItems}/>: null}
        <h2 id="dynamicTitle">{display.type === 'init' ? 'LATEST 5 ENTRIES': `SEARCH RESULTS FOR: ${resultTitle}`}</h2>
        {display.type === 'notinit' ? <Button onClick={goBacktoFive} id="backtofive" >BACK TO LATEST 5</Button>: null}
        <h5 id="little">Organize alphabetically by:</h5>
        <Button id="filter1" onClick={sortDisplay} >Title</Button>{' '}
        <Button id="filter2" onClick={sortDisplay} >Author</Button>{' '}
        <Button id="filter3" onClick={sortDisplay} >Publisher</Button>{' '}

        { display.items.map( bookObj => <CardItem key={bookObj.id} book={bookObj} results={dataBase}/>)}
      
        </div>
      </div>
    </div>
  )
}

export default ReviewForm