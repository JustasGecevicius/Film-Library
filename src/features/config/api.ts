// Base axios api
import { justasApi } from '../services/axios';

// Constants
import { GET_CONFIG_URL } from './constants';

// Types
import { GetConfig } from './types';

export const getConfig = async () =>
  await justasApi<Readonly<GetConfig>>(GET_CONFIG_URL).then((response) => {
    return response.data;
  });
