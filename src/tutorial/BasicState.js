import React, { useState } from 'react'
// Bootstarp
import { Row, Card, CardBody, Form, FormGroup } from 'reactstrap'
// Mat-UI
import Input from '@mui/material/Input'

const BasicState = () => {
  // Set state
  const [character, setCharacter] = useState('asdsa')

  const changeCharacter = (e) => setCharacter(e.target.value)


  return (
    <Row>
      <h1>Basic State</h1>
      <hr />
      <div className='w-100'>
        <Card>
          <CardBody>
            <Form>
              <FormGroup>
                <h4>
                  Typing
                </h4>
                <label>Result : <code>{character}</code></label>
              </FormGroup>
              <FormGroup>
                <Input defaultValue={character} onChange={changeCharacter} />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Row>
  );
}

export default BasicState;
