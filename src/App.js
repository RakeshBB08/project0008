import React, { useState } from 'react';

import CoreNetwork from './components/coreNetwork';
import BaseStation from './components/baseStation';

function App() {
  return (
    <div className="App">
      <h1>5G End-to-End Project</h1>
      <CoreNetwork />
      <BaseStation />
    </div>
  );
}

export default App;
