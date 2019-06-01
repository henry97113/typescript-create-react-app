import * as React from 'react';
const img = require('../images/photo-1557236516-f8d2e4ff66f2.jpeg');

const Hello = () => {
  const [num, setNum] = React.useState(0);
  return (
    <React.Fragment>
      <img src={img} />
      <h1>Current Number: {num}</h1>
      <button onClick={() => setNum(num + 1)}>increment</button>
    </React.Fragment>
  );
};

export default Hello;
