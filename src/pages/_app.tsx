import type { AppProps } from 'next/app';

import { MSWWrapper } from '@/lib/msw';
import { AppProvider } from '@/providers/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <MSWWrapper>
        <Component {...pageProps} />
      </MSWWrapper>
    </AppProvider>
  );
};
export default App;
