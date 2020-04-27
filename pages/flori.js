import Head from 'next/head'
import { returnData } from '../lib/prueba';

export async function getStaticProps() {
  const allPostsData = returnData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Flori({ allPostsData }) {
  return (
    <h1>hey {allPostsData}</h1>
  )
};
