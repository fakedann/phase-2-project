import React, { useState } from "react";
import Table from 'react-bootstrap/Table'
import PopOv from "./PopOv";

function TableItem({results, callModal}){

  return (
  <Table striped bordered hover>
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
      <PopOv results={results} callModal={callModal}/>
    </tbody>
  </Table>
  )
}

export default TableItem