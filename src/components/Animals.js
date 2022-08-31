import Animal from "./Animal";

const Animals = ({ animals, toggleIsClicked, randomAnimals }) => {
  return (
    <div className="animals">
      {randomAnimals(animals, 8).map((animal) => (
        <Animal
          key={animal.id}
          animal={animal}
          toggleIsClicked={toggleIsClicked}
        />
      ))}
    </div>
  );
};

export default Animals;
