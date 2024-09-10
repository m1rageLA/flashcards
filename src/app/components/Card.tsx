import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";



interface StarProps {
  starState: string;
  setStarState: (newState: string) => void;
}

const Star: React.FC<StarProps> = ({ starState, setStarState }) => {
  function checkStarState(): string | void {
    if (starState === "star1.png") {
      return "star2.png";
    } else if (starState === "star2.png") {
      return "star1.png";
    } else {
      alert("Error with saving");
    }
  }

  return (
    <a
      onClick={(e) => {
        e.stopPropagation();
        const newState = checkStarState();
        if (newState) {
          setStarState(newState);
        }
      }}
    >
      <Image
        src={`/images/${starState}`}
        alt="save card"
        width={22}
        height={22}
      ></Image>
    </a>
  );
};

const Card = () => {
  const [flipped, setFlipped] = useState(false);
  const [starState, setStarState] = useState("star1.png");


  const handleClick = () => {
    setFlipped(!flipped);
    console.log(flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          <header>
            <Star starState={starState} setStarState={setStarState} />
          </header>
          {/* <main>{data[2].language}</main> */}
        </div>

        <div className="card-back">
          <header>
            <Star starState={starState} setStarState={setStarState} />
          </header>
          <main>Книга</main>
        </div>
      </div>
    </div>
  );
};

export default Card;
