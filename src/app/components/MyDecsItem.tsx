import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { Item } from "@/types";

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
        <h3>{item.title}</h3>
        <p>{item.length} entries • {item.language}</p>
      </div>
      <ProgressBar value={item.progress}/>
    </div>
  );
};

export default MyDecsItem;
