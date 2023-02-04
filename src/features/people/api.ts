// Apis
import { api } from "features/services/axios";

// Constants
import { GET_TRENDING_PEOPLE_URL } from "./constants";

// Types
import { People } from "./types";

// A function that fetches all the trending people
export const getPopularPeople = async () => await api<People>(GET_TRENDING_PEOPLE_URL);
