import { useFirebaseContext } from '../features/context/FirebaseContext';
import { useUserInfo } from '../features/profile/hooks';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
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
      position: 'right' as const,
    },
    title: {
      display: false,
    },
    colors: {
      enabled: true,
      forceOverride: true,
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Count',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Ratings',
      },
    },
  },
};

ChartJS.defaults.borderColor = 'rgba(0, 0, 0, 0)';
ChartJS.defaults.scales.linear.suggestedMax = 10;
ChartJS.defaults.datasets.bar.borderColor = 'rgba(0, 0, 0, 1)';
ChartJS.defaults.datasets.bar.borderWidth = 1;
ChartJS.register(Colors);

export const ComponentTest = () => {
  const { userInfo, db } = useFirebaseContext();
  const { differentMoviesRatings, differentSeriesRatings } = useUserInfo(
    userInfo?.uid,
    db
  );
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: 'Movies',
        data: differentMoviesRatings,
        borderColor: 'rgba(0, 0, 0, 1)',
        color: 'rgba(255, 255, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Series',
        data: differentSeriesRatings,
      },
    ],
  };
  return (
    <div className='barWrap'>
      <Bar options={options} data={data} />
    </div>
  );
};
