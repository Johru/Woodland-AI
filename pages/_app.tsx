import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import { SidebarProvider, BoardProvider, FactionProvider  } from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
  
    <FactionProvider>
    <BoardProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BoardProvider>
   </FactionProvider>

    </SidebarProvider>
  );
}

export default MyApp;
