import Featured from '@/component/Featured'
import PizzaList from '@/component/PizzaList'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'; 

export default function Home({pizzaList}) {
  return (
    <>
      <Head>
        <title>food ordering app</title>
        <meta name="description" content="best food ordering app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList}/>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  // const myCookie = ctx.req?.cookies || "";
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      // admin,
    },
  };
};
