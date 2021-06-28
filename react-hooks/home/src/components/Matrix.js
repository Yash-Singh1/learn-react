import React from 'react';
import MATRIX_FRAMES from '../data/matrix';
import useDynamicTransition from '../hooks/useDynamicTransition';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

function Gallery() {
  const [index, setDelay, setIncrement] = useDynamicTransition(
    MATRIX_FRAMES,
    0,
    20,
    1
  );

  function updateDelay(event) {
    setDelay(Number(event.target.value));
  }

  function updateIncrement(event) {
    setIncrement(Number(event.target.value));
  }

  return (
    <div className="Matrix">
      <h3>Matrix</h3>
      <img src={MATRIX_FRAMES[index].image} alt="matrix" />
      <Form inline className="multiform">
        <FormGroup>
          <FormLabel>Matrix transition delay (milliseconds):</FormLabel>
          <FormControl type="number" onChange={updateDelay} />
        </FormGroup>
        <FormGroup
          style={{
            marginTop: 10
          }}
        >
          <FormLabel>Matrix increment count:</FormLabel>
          <FormControl type="number" onChange={updateIncrement} />
        </FormGroup>
      </Form>
    </div>
  );
}

export default Gallery;
