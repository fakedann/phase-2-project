import React, { useState } from "react";

function BookSelection(){

  const [searchData, setSearch] = useState('')
  const [checkedStatus, setChecked] = useState('date')


  function handleSubmit(e){
    e.preventDefault()
    console.log(searchData)
  }

  function handleChange(e){
    setChecked(e.target.value)
  }
  console.log(checkedStatus)

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

          </div>
        </div>
      </div>
  
  )
}

export default BookSelection