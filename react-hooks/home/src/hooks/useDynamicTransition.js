import { useEffect, useState } from 'react';

const useDynamicTransition = function (
  frames,
  initialIndex = 0,
  initialDelay,
  initialIncrement = 1
) {
  const [index, setIndex] = useState(initialIndex);
  const [delay, setDelay] = useState(initialDelay);
  const [increment, setIncrement] = useState(initialIncrement);

  useEffect(() => {
    const intervalID = setInterval(
      () =>
        setIndex((storedIndex) => (storedIndex + increment) % frames.length),
      delay
    );

    return () => {
      clearInterval(intervalID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, increment]);

  return [index, setDelay, setIncrement];
};

export default useDynamicTransition;
