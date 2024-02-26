import React, { useState } from 'react';
function BaseStation() {
    const [isOn, setIsOn] = useState(false);
  
    const toggleBaseStation = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div>
        <h2>Base Station</h2>
        <button onClick={toggleBaseStation}>{isOn ? 'Turn Off' : 'Turn On'}</button>
        {isOn && <p>Base station is active.</p>}
      </div>
    );
  }
  
export default BaseStation;
