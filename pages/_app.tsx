import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import BoardProvider from '../components/BoardProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BoardProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BoardProvider>
  );
}

export default MyApp;
