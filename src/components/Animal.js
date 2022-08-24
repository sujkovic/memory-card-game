import React from 'react'
import { useState } from 'react';

const Animal = props => {
    const [name, setName] = useState('');
    let isSeen = false;
    setName(props.name);

  return (
    <div onClick={isSeen = false}>{name}</div>
  )
}

export default Animal