// Base axios api
import { api } from "features/services/axios";

// Constants
import { GET_CONFIG_URL } from "./constants";

// Types
import { GetConfig } from "./types";

export const getConfig = async () =>
  await api<Readonly<GetConfig>>(GET_CONFIG_URL).then((response) => {
    return response.data;
  });
