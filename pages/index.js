import Head from 'next/head';
import { Nav } from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <div>Hello World</div>
    </div>
  );
}