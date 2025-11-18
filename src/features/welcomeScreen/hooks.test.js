import { QueryClient, QueryClientProvider } from 'react-query';
import { useBackground } from './hooks';
import { renderHook, act, waitFor } from '@testing-library/react';
import React from 'react';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const exampleLink = 'https://example.com/background.jpg';

jest.mock('firebase/storage', () => {
  return {
    getStorage: jest.fn(() => 'mockStorageResult'),
    ref: jest.fn(() => 'mockRefResult'),
    getDownloadURL: jest.fn(() => Promise.resolve(exampleLink)),
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
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
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

    expect(getStorage).toHaveBeenCalledTimes(2);
    expect(ref).toHaveBeenCalledWith('mockStorageResult', 'background.avif');
    expect(getDownloadURL).toHaveBeenCalledWith('mockRefResult');
  });
});
