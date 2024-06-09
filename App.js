import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <Counter initialCount={10} decrementAmount={2} />
    </div>
  );
};

export default App;
