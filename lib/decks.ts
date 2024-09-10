import { setData } from "@/app/redux/features/decs";
import store from "@/app/redux/store";
import { Deck } from "@/types";

export async function getStaticDeckById(id: number): Promise<Deck> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch deck with id ${id}`);
  }
  const deck: Deck = await response.json();
  return deck;
}

export async function getStaticAllDecks(): Promise<Deck[]> {
  const response = await fetch(`http://localhost:3000/DATA.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch all decks`);
  }
  const decks: Deck[] = await response.json(); // Указываем тип как Deck[]
  return decks;
}
