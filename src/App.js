import "./style.css";
import Header from "./Header";
import Animals from "./components/Animals";
import Footer from "./Footer";
import { useState, useEffect } from "react";

import camel from "./assets/camel.jpg";
import cat from "./assets/cat.jpg";
import chicken from "./assets/chicken.jpg";
import chipmunk from "./assets/chipmunk.jpg";
import cow from "./assets/cow.jpg";
import fox from "./assets/fox.jpg";
import frog from "./assets/frog.jpg";
import horse from "./assets/horse.jpg";
import kangaroo from "./assets/kangaroo.jpg";
import koala from "./assets/koala.jpg";
import panda from "./assets/panda.jpg";
import penguin from "./assets/penguin.jpg";
import rabbit from "./assets/rabbit.jpg";
import racoon from "./assets/racoon.jpg";
import sheep from "./assets/sheep.jpg";
import swan from "./assets/swan.jpg";
import tiger from "./assets/tiger.jpg";
import turtle from "./assets/turtle.jpg";

const App = () => {
  const [curScore, setCurScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Tiger",
      isClicked: false,
      isClickedTwice: false,
      pic: tiger,
    },
    {
      id: 2,
      name: "Turtle",
      isClicked: false,
      isClickedTwice: false,
      pic: turtle,
    },
    {
      id: 3,
      name: "Sheep",
      isClicked: false,
      isClickedTwice: false,
      pic: sheep,
    },
    {
      id: 4,
      name: "Swan",
      isClicked: false,
      isClickedTwice: false,
      pic: swan,
    },
    {
      id: 5,
      name: "Penguin",
      isClicked: false,
      isClickedTwice: false,
      pic: penguin,
    },
    {
      id: 6,
      name: "Fox",
      isClicked: false,
      isClickedTwice: false,
      pic: fox,
    },
    {
      id: 7,
      name: "Racoon",
      isClicked: false,
      isClickedTwice: false,
      pic: racoon,
    },
    {
      id: 8,
      name: "Chipmunk",
      isClicked: false,
      isClickedTwice: false,
      pic: chipmunk,
    },
    {
      id: 9,
      name: "Panda",
      isClicked: false,
      isClickedTwice: false,
      pic: panda,
    },
    {
      id: 10,
      name: "Camel",
      isClicked: false,
      isClickedTwice: false,
      pic: camel,
    },
    {
      id: 11,
      name: "Koala",
      isClicked: false,
      isClickedTwice: false,
      pic: koala,
    },
    {
      id: 12,
      name: "Frog",
      isClicked: false,
      isClickedTwice: false,
      pic: frog,
    },
    {
      id: 13,
      name: "Rabbit",
      isClicked: false,
      isClickedTwice: false,
      pic: rabbit,
    },
    {
      id: 14,
      name: "Cat",
      isClicked: false,
      isClickedTwice: false,
      pic: cat,
    },
    {
      id: 15,
      name: "Cow",
      isClicked: false,
      isClickedTwice: false,
      pic: cow,
    },
    {
      id: 16,
      name: "Chicken",
      isClicked: false,
      isClickedTwice: false,
      pic: chicken,
    },
    {
      id: 17,
      name: "Horse",
      isClicked: false,
      isClickedTwice: false,
      pic: horse,
    },
    {
      id: 18,
      name: "Kangaroo",
      isClicked: false,
      isClickedTwice: false,
      pic: kangaroo,
    },
  ]);

  const toggleIsClicked = (animal) => {
    console.log(`${animal.name} is ${animal.isClicked}`);
    if (!animal.isClicked) {
      setAnimals(
        animals.map((e) => (e.id === animal.id ? { ...e, isClicked: true } : e))
      );
      setCurScore(curScore + 1);
      console.log(`${curScore} curscore ${highScore} highscore`);
    }
    if (animal.isClicked) {
      setAnimals(
        animals.map((e) =>
          e.id === animal.id ? { ...e, isClickedTwice: true } : e
        )
      );
    }
    console.log(animals);
    console.log(`${curScore} curscore ${highScore} highscore`);
  };

  function randomAnimals(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  useEffect(() => {
    if (curScore >= highScore) {
      setHighScore(curScore);
    }
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].isClickedTwice) {
        setCurScore(0);
        for (let j = 0; j < animals.length; j++) {
          animals[j].isClicked = false;
          animals[j].isClickedTwice = false;
        }
        return;
      }
    }
  }, [animals, curScore, highScore]);

  return (
    <div className="App">
      <Header />
      <div class="body">
        <div class="score">
          <div>Score: {curScore}</div>
          <div>High Score: {highScore}</div>
        </div>
        <div>
          {highScore === 18 ? (
            <div className="win">
              Congrats! You got the highest possible score!
            </div>
          ) : (
            <></>
          )}
        </div>
        <div
          className="animalWrapper"
          onClick={() => setCurScore(curScore + 1)}
        ></div>
        <Animals
          animals={animals}
          toggleIsClicked={toggleIsClicked}
          randomAnimals={randomAnimals}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
