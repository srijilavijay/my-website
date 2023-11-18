import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Card5() {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:"194px", width:"259px"}} src="./images/card5.jfif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Card5