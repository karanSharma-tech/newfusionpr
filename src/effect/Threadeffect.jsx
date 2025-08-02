import React from 'react'
import Threads from '../mainCode/mainCode'
function Threadeffect() {
  return (
    <>
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
    </div>
    </>

  )
}

export default Threadeffect;
