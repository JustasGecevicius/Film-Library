import { api } from "features/services/axios";

import { GET_TRENDING_PEOPLE_URL } from "./constants";
import { People } from "./types";

export const getPopularPeople = async () => await api<People>(GET_TRENDING_PEOPLE_URL);
