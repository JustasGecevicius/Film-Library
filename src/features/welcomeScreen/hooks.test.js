import { QueryClient, QueryClientProvider } from 'react-query';
import { useBackground, useDisplayName } from './hooks';
import { renderHook, act, waitFor } from '@testing-library/react';
import React from 'react';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { useFirebaseContext } from '../context/FirebaseContext';

const exampleLink = 'https://example.com/background.jpg';

jest.mock('firebase/storage', () => {
  return {
    getStorage: jest.fn(() => 'mockStorageResult'),
    ref: jest.fn(() => 'mockRefResult'),
    getDownloadURL: jest.fn(() => Promise.resolve(exampleLink)),
  };
});

jest.mock('../context/FirebaseContext', () => {
  return {
    useFirebaseContext: jest.fn(() => ({
      userInfo: { displayName: 'some user name' },
    })),
  };
});

// --- React Query test wrapper ---
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return ({ children }) => (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.StrictMode>
  );
};

describe('hook tests', () => {
  it('returns the background url', async () => {
    const { result } = renderHook(() => useBackground(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current).toBe(exampleLink);
    });

    expect(getStorage).toHaveBeenCalledTimes(4);
    expect(ref).toHaveBeenCalledWith('mockStorageResult', 'background.avif');
    expect(getDownloadURL).toHaveBeenCalledWith('mockRefResult');
  });

  it('returns the display name', async () => {
    const { result } = renderHook(() => useDisplayName());
    await waitFor(() => {
      expect(result.current).toBe('some.user');
    });

    expect(useFirebaseContext).toHaveBeenCalledTimes(3);
  });
});
