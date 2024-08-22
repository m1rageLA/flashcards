import React from "react";
import Image from "next/image";
import { Item } from "@/types";

interface TopicsItemProps {
  item: Item;
}

const TopicsItem: React.FC<TopicsItemProps> = ({ item }) => {
  return (
    <div className="item">
      <Image
        className="item__image"
        src="/images/travel.png"
        width={100}
        height={100}
        alt="Deck element"
      />
      <div>
        <h3>{item.title}</h3>
        <p>{item.length} entries</p>
      </div>

    </div>
  );
};

export default TopicsItem;
