
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const elapsedTime = useSelector((state) => state.elapsedTime);
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <div>Time: {elapsedTime} seconds</div>
      <button onClick={() => dispatch({ type: 'START_STOPWATCH' })}>Start</button>
      <button onClick={() => dispatch({ type: 'STOP_STOPWATCH' })}>Stop</button>
      <button onClick={() => dispatch({ type: 'RESET_STOPWATCH' })}>Reset</button>
    </div>
  );
}

export default App;
