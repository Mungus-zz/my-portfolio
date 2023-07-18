import React from 'react'

const Html: React.FC = () => {
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: '#020403',
          fontSize: 'calc(1em + 1vw)'  // Minimum size of 1em, scales with viewport width
        }}>
        hi.
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '140vh',
          left: '50vw',
          transform: 'translateX(-65%)',
          color: '#020403',
          fontSize: 'calc(1em + 1vw)'  // Minimum size of 1em, scales with viewport width
        }}>
        I'm Erwin
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '250vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: '#020403',
          fontSize: 'calc(1em + 1vw)'  // Minimum size of 1em, scales with viewport width
        }}>
        Welcome to my portfolio
      </h1>
    </>
  )
}

export default Html
