import React, { useState } from 'react'
// Bootstarp
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
// Mat-UI
import Input from '@mui/material/Input'
import { CardContent } from '@mui/material'

const BasicState = () => {
  // Set state
  const [character, setCharacter] = useState('type here!')

  const changeCharacter = (e) => setCharacter(e.target.value)


  return (
    <Row>
      <h1>Basic State</h1>
      <hr />
      <div className='w-100'>
        <Card>
          <CardHeader>
          <h4>
            Typing
          </h4>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={12}>
                <label>Result : <code>{character}</code></label>
              </Col>
              <Col md={12}>
                <Input defaultValue={character} onChange={changeCharacter} />
              </Col>
            </Row>
         </CardBody>
        </Card>
      </div>
    </Row>
  );
}

export default BasicState;
