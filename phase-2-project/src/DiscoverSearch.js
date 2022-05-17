import React, { useState } from "react";

function DiscoverSearch({fetchInput}){

  const [searchData, setSearch] = useState('')
  const [checkedStatus, setChecked] = useState('date')


  function handleChange(e){
    setChecked(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetchInput(searchData, checkedStatus)
    setSearch('')
    console.log('work')
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search:</label>
      <input id="srchBar" type="text" value={searchData} placeholder="dadada " onChange={e => setSearch(e.target.value)}/>
      <button type="submit">Submit</button>
      <div className="radio">
        <label>Title</label>
        <input type="radio" value="title" onChange={handleChange} checked={checkedStatus === "title"}/>
        <label>Author</label>
        <input type="radio" value="author" onChange={handleChange} checked={checkedStatus === "author"}/>
        <label>Publisher</label>
        <input type="radio" value="publisher" onChange={handleChange} checked={checkedStatus === "publisher"}/>
      </div>
    </form>
  )

}

export default DiscoverSearch