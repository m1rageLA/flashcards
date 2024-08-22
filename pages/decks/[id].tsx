// pages/decks/[id].tsx
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import { Deck } from "@/types";
import { getStaticDeckById } from "../../lib/decks";

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

export default function DeckPage({ deck }: DeckPageProps) {
  return (
    <div>
      <h1>{deck.title}</h1>
      {/* Render deck data */}
    </div>
  );
}
