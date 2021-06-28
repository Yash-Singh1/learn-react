import React from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import useDynamicTransition from '../hooks/useDynamicTransition';
import PICTURES from '../data/pictures';

function Gallery() {
  const [index, setDelay, setIncrement] = useDynamicTransition(
    PICTURES,
    0,
    3000,
    1
  );

  function updateDelay(event) {
    setDelay(Number(event.target.value));
  }

  function updateIncrement(event) {
    setIncrement(Number(event.target.value));
  }

  return (
    <div className="Gallery">
      <h3>Gallery</h3>
      <img src={PICTURES[index].image} alt="gallery" />
      <Form inline className="multiform">
        <FormGroup>
          <FormLabel>Gallery transition delay (milliseconds):</FormLabel>
          <FormControl type="number" onChange={updateDelay} />
        </FormGroup>
        <FormGroup
          style={{
            marginTop: 10
          }}
        >
          <FormLabel>Gallery increment count:</FormLabel>
          <FormControl type="number" onChange={updateIncrement} />
        </FormGroup>
      </Form>
    </div>
  );
}

export default Gallery;
