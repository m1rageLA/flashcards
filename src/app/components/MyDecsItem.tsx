import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

interface Item {
  id: number;
  name: string;
}

interface TopicsItemProps {
  item: Item;
}

const MyDecsItem: React.FC<TopicsItemProps> = ({ item }) => {
  return (
    <div className="item item--decs">
      <Image
        className="item__image"
        src="/images/travel.png"
        width={100}
        height={100}
        alt="Deck element"
      />
      <div>
        <h3>{item.name}</h3>
        <p>26 entries</p>
      </div>
      <ProgressBar value={50}/>
    </div>
  );
};

export default MyDecsItem;
