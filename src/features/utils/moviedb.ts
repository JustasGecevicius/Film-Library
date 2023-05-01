import { getConfig } from "features/config/api";
import { useQuery } from "react-query";

export const useConfig = () => {
  const { data: config } = useQuery("config", getConfig, {
    staleTime: 300000,
  });
  return {config}
}