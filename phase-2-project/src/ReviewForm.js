import React from "react";
import Figure from 'react-bootstrap/Figure'

function ReviewForm(){
  return (
    <div>
      <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src= {require("./book.jpeg")}
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src= {require("./book.jpeg")}
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>
    </div>
  )
}

export default ReviewForm