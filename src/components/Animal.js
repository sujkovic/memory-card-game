import React from "react";

const Animal = ({ animal, toggleIsClicked }) => {
  return (
    <div className="animal" onClick={() => toggleIsClicked(animal)}>
      <img src={animal.pic} alt={animal.name}></img>
    </div>
  );
};

export default Animal;
