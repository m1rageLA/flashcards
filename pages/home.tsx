import React, { useEffect } from "react";
import Header from "@/app/components/Header";
import TopicsItem from "@/app/components/TopicsItem";
import MyDecsItem from "@/app/components/MyDecsItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { increment, decrement } from "@/app/redux/features/someFeature";


interface Item {
  id: number;
  name: string;
}

interface HomeProps {
  posts: Item[];
}

export async function getServerSideProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: Item[] = await response.json();
    console.log(data);
    return { props: { posts: data } };
  } catch (error) {
    console.error(error);
    return { props: { posts: [] } };
  }
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  
  const value = useSelector((state: RootState) => state.someFeature.value);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <main className="main">
        <div className="main__decs">
          <div className="container">
            <h2 className="main__subtitle">
              My decs <span>({5})</span>
            </h2>
            <div className="main__decs-block">
              {posts.map((item) => {
                return <MyDecsItem key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="main__topics">
          <div className="container">
            <h2 className="main__subtitle">
              All topics <span>({5})</span>
            </h2>
            <div className="main__topics-block">
              {posts.map((item) => {
                return <TopicsItem key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </main>
      {console.log(posts)}
    </>
  );
};

export default Home;
