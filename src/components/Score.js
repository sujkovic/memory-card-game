import React from 'react'
import { useState } from 'react';

const Score = (props) => {
  const [curScore, setCurScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (curScore > highScore) {
    setHighScore(curScore);
  }

  return (
    <div>
      <div onClick={() => setCurScore(curScore + 1)}>Score: {curScore}</div>
      <div>High Score: {highScore}</div>
    </div>
  )
}

export default Score