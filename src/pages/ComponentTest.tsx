import { getConfig } from "features/config/api";
import { useFirebaseContext } from "features/context/FirebaseContext";
import { fetchLiked, fetchRated } from "features/likeAndRate/functions";
import { useUserInfo } from "features/profile/hooks";
import { useMutation, useQuery, useQueries } from "react-query";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    customCanvasBackgroundColor: {
      color: "white"
    }
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const ComponentTest = () => {
  const {userInfo, db} = useFirebaseContext();
  const {differentMoviesRatings, differentSeriesRatings} = useUserInfo(userInfo, db);
  const data = {
    labels,
    datasets: [
      {
        label: 'Movie Ratings',
        data: differentMoviesRatings,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1
      },
      {
        label: 'Series Ratings',
        data: differentSeriesRatings,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;;
};
