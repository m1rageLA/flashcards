// pages/decks/[id].tsx
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { Deck } from "@/types";
import { getStaticDeckById } from "../../lib/decks";
import Card from "@/app/components/Card";
import Image from "next/image";

interface DeckPageProps {
  deck: Deck;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all possible deck IDs or paths
  const decks = await getStaticDeckById(""); // Replace with actual logic to fetch decks
  const paths = decks.map((deck: Deck) => ({
    params: { id: deck.id.toString() }, // Ensure id is treated as a string
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DeckPageProps> = async (
  context: GetStaticPropsContext
) => {
  const { id } = context.params!;
  const deck = await getStaticDeckById(id as string); // Cast id to string

  return { props: { deck } };
};

function rotate() {}

export default function DeckPage({ deck }: DeckPageProps) {
  return (
    <div className="deck-page">
      <header className="header">
        <div className="header__type"><h2>LOGO</h2></div>
        <div className="header__info">
          <h3>3 / 20</h3>
          <h3>Quizlet I. A. Meeting people</h3>
        </div>
        <div className="header__close">
          <Image src={"/close.png"} alt="" width={100} height={100}></Image>
        </div>
      </header>
      <div className="decks">
        <Card />
      </div>
    </div>
  );
}
