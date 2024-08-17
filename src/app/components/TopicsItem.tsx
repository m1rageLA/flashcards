import React from "react";
import Image from "next/image";
interface Item {
  id: number;
  name: string;
}

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
        alt="Logo"
      />
      <div>
        <h3>{item.name}</h3>
        <p>26 entries</p>
      </div>
    </div>
  );
};

export default TopicsItem;
