import { useBackground, useDisplayName } from '../features/welcomeScreen/hooks';
import { Header } from '../features/header/components/Header';
import { useFirebaseContext } from '../features/context/FirebaseContext';
import { useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  const background = useBackground();
  const displayName = useDisplayName();
  const { darkTheme } = useFirebaseContext();

  useEffect(() => {
    axios
      .get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res, 'RESPONSE');
        axios
          .post(
            'http://localhost:8000/login',
            {
              email: 'new@email.com',
              password: 'password123!',
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            axios
              .get('http://localhost:8000/api/user', { withCredentials: true })
              .then((res) => console.log(res));
          });
      });
  }, []);

  return background ? (
    <div className={darkTheme ? 'darkTheme' : 'theme'}>
      <div
        className='w-screen h-screen px-8'
        style={{ backgroundImage: `url(${background})` }}>
        <Header />
        {displayName ? (
          <h3 className='relative p-6 mx-auto font-bold text-center text-white rounded-lg text-8xl darker-background transform-v-center'>
            Welcome back
            <br />
            {displayName}
          </h3>
        ) : (
          <h2 className='relative p-6 mx-auto font-bold text-center text-white rounded-lg text-8xl darker-background transform-v-center w-fit'>
            Discover
          </h2>
        )}
      </div>
    </div>
  ) : null;
};
