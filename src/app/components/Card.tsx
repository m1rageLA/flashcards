import Image from "next/image";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [flipped, setFlipped] = useState(false);
  const [starState, setStarState] = useState("star.png");

  const handleClick = () => {
    setFlipped(!flipped);
    console.log(flipped);
  };

  // useEffect(() => {
  //   if (ШОТО-ТАМ) {

  //   }
  //   setStarState("/star2.png");
  // }, [starState]);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className={`card-inner  `}>
        <div className="card-front">
          <header>
            <Image
              src={`/images/${starState}`}
              alt="save card"
              width={22}
              height={22}
            ></Image>
          </header>
          <main></main>
        </div>
        <div className="card-back">
          <header>
            <Image
              src={`/images/${starState}`}
              alt="save card"
              width={22}
              height={22}
            ></Image>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Card;
