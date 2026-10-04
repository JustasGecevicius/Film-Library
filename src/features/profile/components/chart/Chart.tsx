import { useFirebaseContext } from '../../../context/FirebaseContext';
import { useUserInfo } from '../../../profile/hooks';
import { Bar } from 'react-chartjs-2';
import {
  BarController,
  BarElement,
  CategoryScale,
  Colors,
  Legend,
  LinearScale,
} from 'chart.js';
import { Chart as ChartJS } from 'chart.js';

ChartJS.register(
  BarElement,
  BarController,
  LinearScale,
  CategoryScale,
  Colors,
  Legend
);

export const Chart = ({ id }: { id?: string }) => {
  const { db } = useFirebaseContext();
  const { differentMoviesRatings, differentSeriesRatings } = useUserInfo(
    id,
    db
  );
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.75)',
        },
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
        beginAtZero: true,
        ticks: {
          color: 'rgba(255, 255, 255, 0.55)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.08)',
        },
        title: {
          display: true,
          text: 'Count',
          color: 'rgba(255, 255, 255, 0.55)',
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.55)',
        },
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Ratings',
          color: 'rgba(255, 255, 255, 0.55)',
        },
      },
    },
  };
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: 'Movies',
        data: differentMoviesRatings,
      },
      {
        label: 'Series',
        data: differentSeriesRatings,
      },
    ],
  };

  return (
    <div className='h-full p-6 border shadow-xl rounded-3xl border-white/10 bg-white/5 sm:p-8'>
      <h2 className='mb-6 text-2xl font-bold'>Your rating activity</h2>
      <div className='h-72 sm:h-80'>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
