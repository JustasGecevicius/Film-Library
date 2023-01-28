import { api } from "services/axios";

import { GET_CONFIG_URL } from "./constants";

// Types
import { GetConfig } from "./types";

export const getConfig = async () => await api<GetConfig>(GET_CONFIG_URL);
