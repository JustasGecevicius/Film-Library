// Hooks
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
// API
import {  getSeriesData } from "./api";

export const useSeriesData = () => {
  const { id } = useParams();

  const { data: seriesData } = useQuery(
    ["series", id],
    () => {
      return getSeriesData(id);
    },
    {
      enabled: !!id,
    }
  );
  return seriesData;
}