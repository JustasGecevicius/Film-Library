import { useFirebaseContext } from '../../../context/FirebaseContext';
import { useUserInfo } from '../../../profile/hooks';
import { Bar } from 'react-chartjs-2';
import '../../../profile/css/chart.css';

interface Props {
  id: string | undefined;
}

export const Chart = ({ id }: Props) => {
  const { db } = useFirebaseContext();
  const { differentMoviesRatings, differentSeriesRatings } = useUserInfo(id, db);
  const options = {
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
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: 'Movies',
        data: differentMoviesRatings,
        //backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        color: 'rgba(255, 255, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Series',
        data: differentSeriesRatings,
        //backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div className='chartWrapper'>
      <Bar options={options} data={data} />
    </div>
  );
};
