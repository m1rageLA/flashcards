// pages/decks/[id].tsx
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { Deck } from "@/types";
import { getStaticDeckById, getStaticAllDecks } from "../../lib/decks";
import Card from "@/app/components/Card";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface DeckPageProps {
  deck: Deck;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all possible deck IDs or paths
  const decks = await getStaticAllDecks(); // Убедитесь, что возвращаемое значение – это массив
  // Если getStaticAllDecks возвращает массив объектов Deck
  const paths = decks.map((deck: Deck) => ({
    params: { id: deck.id.toString() }, // Ensure id is treated as a string
  }));

  return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps<DeckPageProps> = async (
  context: GetStaticPropsContext
) => {
  const idString = context.params?.id as string;
  const id = Number(idString);
  const deck = await getStaticDeckById(id); 

  return { props: { deck } };
};

export default function DeckPage({ deck }: DeckPageProps) {
  const { data } = useSelector((state: RootState) => state.decs);
  const [item, setItem] = useState<Deck | null>(null);
  const router = useRouter(); // Используем useRouter для программной навигации

  useEffect(() => {
    if (Array.isArray(data) && data.length > 5) {
      const index = deck.id;
      if (index >= 0 && index < data.length) {
        setItem(data[index - 1]);
      } else {
        setItem(null);
      }
    }
  }, [data, deck.id]);

  // Обработчик для кнопки "Close"
  const handleClose = () => {
    router.push("/decks/");
  };

  if (!item) {
    return <div>Loading...</div>; // Обработка загрузки
  }

  return (
    <div className="deck-page">
      <header className="header">
        <div className="header__type">
          <h2>LOGO</h2>
        </div>
        <div className="header__info">
          <h3>{item.title}</h3>
        </div>
        <div className="header__close" onClick={handleClose}>
          <Image src="/close.png" alt="Close" width={100} height={100} />
        </div>
      </header>
      <div className="decks">
        <Card />
      </div>
    </div>
  );
}
