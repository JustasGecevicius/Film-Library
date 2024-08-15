import { FirebaseContextComponent } from './features/context/FirebaseContext';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ReactQueryDevtools } from 'react-query/devtools';

const root = createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseContextComponent>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </FirebaseContextComponent>
    </BrowserRouter>
  </StrictMode>
);
