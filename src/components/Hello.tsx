import * as React from 'react';

const Hello = () => {
  const [num, setNum] = React.useState(0);
  return (
    <React.Fragment>
      <h1>React & TypeScript Template</h1>
      <h1>Current Number: {num}</h1>
      <button onClick={() => setNum(num + 1)}>increment</button>
    </React.Fragment>
  );
};

export default Hello;
