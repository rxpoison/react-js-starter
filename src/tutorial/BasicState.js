import React, { useState } from 'react'
// Bootstarp
import { Row } from 'reactstrap'
// Mat-UI
import Box from '@mui/material/Box'
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
        <h4>
          Typing
        </h4>
        <label>Result : {character}</label>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
          <Input defaultValue={character} onChange={changeCharacter} />
        </Box>
      </div>
    </Row>
  );
}

export default BasicState;
