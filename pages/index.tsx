import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { wrapper } from "@/app/redux";
import { setData } from "@/app/redux/features/decs";
import { GetStaticProps } from "next";
import { Item } from "@/types";
import { useEffect } from "react";

interface HomeProps {
  posts: Item[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.decs);

  useEffect(() => {
    dispatch(setData(posts));
  }, [dispatch, posts]);

  return (
    <div>
      <h1>Data from Server</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const response = await fetch("http://localhost:3000/DATA.json");
    const posts = await response.json();
    console.log(posts);
    // Передаем данные в Redux (опционально)
    store.dispatch(setData(posts));

    return {
      props: {
        posts,
      },
      revalidate: 10, // Перегенерация страницы каждые 10 секунд
    };
  }
);

export default Home;
