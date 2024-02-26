import React, { useState } from 'react';
function CoreNetwork() {
    const [isOn, setIsOn] = useState(false);
  
    const toggleCoreNetwork = () => {
      setIsOn(!isOn);
      console.log("~/inteRn/open5gs/build/tests/app/5gc")
    };
  
    return (
      <div>
        <h2>Core Network</h2>
        <button onClick={toggleCoreNetwork}>{isOn ? 'Turn Off' : 'Turn On'}</button>
        {isOn && <p>Core network is running.</p>}
      </div>
    );
  }


  export default CoreNetwork;
