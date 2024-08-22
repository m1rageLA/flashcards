import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import TopicsItem from "@/app/components/TopicsItem";
import MyDecsItem from "@/app/components/MyDecsItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { Item } from "@/types";
import { wrapper } from "@/app/redux";
import { setData } from "@/app/redux/features/decs";
import { GetStaticProps } from "next";
import { getStaticAllDecks } from "../lib/decks";

interface HomeProps {
  decks: Item[];
}
//проверку если нету то делаем подгрузку
//вынести в отдельный файл

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const decks = await getStaticAllDecks();
    store.dispatch(setData(decks));

    return {
      props: {
        decks,
      },
      revalidate: 10,
    };
  }
);

const Home: React.FC<HomeProps> = ({ decks }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.decs);

  useEffect(() => {
    dispatch(setData(decks));
  }, [dispatch, decks]);

  console.log(data);

  let [myDecks, setmyDecks] = useState<number>(0);
  let [allTopics, setAllTopics] = useState<number>(0);

  useEffect(() => {
    if (decks && decks.length > 0) {
      setmyDecks(decks.filter((post) => post.progress !== null).length);
      setAllTopics(decks.filter((post) => post.progress === null).length);
    }
  }, [decks]);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__decs">
          <div className="container">
            <h2 className="main__subtitle">
              My decs <span>({myDecks})</span>
            </h2>
            <h3 className="main__subtitle-level">
              Level: <span>{decks[0].level}</span>
            </h3>
            <div className="main__decs-block">
              {decks.map((item) => {
                if (item.progress !== null) {
                  return <MyDecsItem key={item.id} item={item} />;
                }
              })}
            </div>
          </div>
        </div>
        <div className="main__topics">
          <div className="container">
            <h2 className="main__subtitle">
              All topics <span>({allTopics})</span>
            </h2>
            <div className="main__topics-block">
              {decks.map((item) => {
                if (item.progress === null) {
                  return <TopicsItem key={item.id} item={item} />;
                }
              })}
            </div>
          </div>
        </div>
      </main>
      {console.log(decks)}
    </>
  );
};

export default Home;
