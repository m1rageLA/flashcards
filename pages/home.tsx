import React, { useEffect } from "react";
import Header from "@/app/components/Header";

interface Post {
  id: number;
  title: string;
}

interface HomeProps {
  posts: Post[];
}
export async function getServerSideProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: Post[] = await response.json();
    console.log(data);
    return { props: { posts: data } };
  } catch (error) {
    console.error(error);
    return { props: { posts: [] } };
  }
}
const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="main__decs">
          <h3 className="main__subtitle">My decs</h3>
        </div>
        <div className="main__topics">
          <h3 className="main__subtitle">All topics</h3>
        </div>
      </main>
      {console.log(posts)}
    </>
  );
};

export default Home;
