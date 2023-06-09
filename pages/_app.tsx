import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';
import { SidebarProvider, BoardProvider, FactionProvider, CanvasProvider } from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
   <CanvasProvider>
    <FactionProvider>
    <BoardProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BoardProvider>
   </FactionProvider>
  </CanvasProvider>
    </SidebarProvider>
  );
}

export default MyApp;
