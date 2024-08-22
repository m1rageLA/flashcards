import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { Item } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";

interface TopicsItemProps {
  item: Item;
}
// жизненный цико

const MyDecsItem: React.FC<TopicsItemProps> = ({ item }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Link className="item item--decs" href={`${currentPath}/${item.id}`}>
      <Image
        className="item__image"
        src="/images/travel.png"
        width={100}
        height={100}
        alt="Deck element"
      />
      <div>
        <h3>{item.title}</h3>
        <p>
          {item.length} entries • {item.language}
        </p>
      </div>
      <ProgressBar value={item.progress} />
    </Link>
  );
};

export default MyDecsItem;
