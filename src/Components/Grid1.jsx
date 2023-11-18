import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'

function Grid1() {
  return (
    <div>
         <Container>
            <br /><br />
      <Row>
        <Col><Card1/></Col>
        <Col><Card2/></Col>
        <Col><Card3/></Col>
        
      </Row>
      <Row><br/>
      </Row>
      <Row>
        <Col><Card4/></Col>
        <Col><Card5/></Col>
        <Col><Card6/></Col>
        
      </Row>
    </Container>
    </div>
  )
}

export default Grid1