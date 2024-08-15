import { useFirebaseContext } from '../../../context/FirebaseContext';
import { useUserInfo } from '../../../profile/hooks';
import { Bar } from 'react-chartjs-2';

type Props = {
  id: string | undefined;
};

export const Chart = ({ id }: Props) => {
  const { db } = useFirebaseContext();
  const { differentMoviesRatings, differentSeriesRatings } = useUserInfo(
    id,
    db
  );
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
      },
      {
        label: 'Series',
        data: differentSeriesRatings,
      },
    ],
  };
  return (
    <div className='flex-row justify-center max-w-4xl mx-auto'>
      <Bar options={options} data={data} />
    </div>
  );
};
