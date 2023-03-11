import { useFirebaseContext } from "features/context/FirebaseContext";
import { useUserInfo } from "features/profile/hooks";
import { Bar } from "react-chartjs-2"

export const Chart = () => {
const {userInfo, db} = useFirebaseContext();
const {differentMoviesRatings, differentSeriesRatings} = useUserInfo(userInfo, db);
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
        forceOverride: true
      }
    },
    scales: {
      y: {
        title : {
          display : true,
          text : "Count"
        }, 
      }, 
      x: {
        title : {
          display : true,
          text : "Ratings"
        },      
      }
    }
  };
  const data = {
    labels : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: 'Movies',
        data: differentMoviesRatings,
        //backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        color:'rgba(255, 255, 0, 1)',
        borderWidth: 1
      },
      {
        label: 'Series',
        data: differentSeriesRatings,
        //backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
    return <Bar options={options} data={data} />
}