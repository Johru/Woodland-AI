import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import BoardProvider from '../components/BoardProvider';
import { SidebarProvider } from '../contexts/SidebarContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
    <BoardProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BoardProvider>
    </SidebarProvider>
  );
}

export default MyApp;
