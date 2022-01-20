import React, { useState } from 'react'
// Bootstarp
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
// Mat-UI
import Input from '@mui/material/Input'
import { Button } from '@mui/material'

const BasicState = () => {
  // Set state
  const [character, setCharacter] = useState('type here!')
  const [counter, setCounter] = useState(0)

  const changeCharacter = (e) => setCharacter(e.target.value)

  const handleCounterPlus = (e) => setCounter(counter + 1)
  const handleCounterMinus = (e) => setCounter(counter - 1)

  return (
    <Row>
      <h1>Basic State</h1>
      <hr />
      <div className='w-100'>
        <Card className='mb-4'>
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
                <Input className="w-100" defaultValue={character} onChange={changeCharacter} />
              </Col>
            </Row>
         </CardBody>
        </Card>


        <Card className='mb-4'>
          <CardHeader>
          <h4>
            Counter
          </h4>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={12}>
                <label>Result : <code>{counter}</code></label>
              </Col>
              <Col md={12}>
                <Button 
                  variant="contained" 
                  color="success" 
                  className='mx-1'
                  handle='change'
                  onClick={handleCounterPlus}>
                  +
                </Button>
                <Button 
                  variant="contained" 
                  color="error" 
                  className='mx-1'
                  onClick={handleCounterMinus}>
                  -
                </Button>
              </Col>
            </Row>
         </CardBody>
        </Card>
      </div>
    </Row>
  );
}

export default BasicState;
