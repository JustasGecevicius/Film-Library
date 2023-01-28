import { api } from "services/axios";

import { GET_TRENDING_PEOPLE_URL } from "./constants";

export const getPopularPeople = async () => await api(GET_TRENDING_PEOPLE_URL);
