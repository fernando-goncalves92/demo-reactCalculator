import React, { useState } from 'react';
import { AppWrapper, CalcWrapper, Row } from './styles';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import * as math from 'mathjs';

const App = () => {  
  const [input, setInput] = useState('');
  
  const addToInput = (value) => {
     setInput(input + value);
  }

  const handleEquals = () => {
    setInput(math.evaluate(input));
  }

  return (    
    <AppWrapper>
      <CalcWrapper>
        <Input input={input}></Input>
        <Row>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </Row>
        <Row>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </Row>
        <Row>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </Row>
        <Row>
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleEquals}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </Row>
        <Row>
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </Row>
      </CalcWrapper>
    </AppWrapper>    
  );  
}

export default App;
