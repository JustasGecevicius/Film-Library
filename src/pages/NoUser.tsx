import { Header } from '../features/header/components/Header';
import { useBackground } from '../features/welcomeScreen/hooks';

export const NoUser = () => {
  const background = useBackground();

  return (
    <div
      className='w-screen h-screen flex-col justify-center px-8'
      style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <h2 className='m-auto w-fit p-2 text-center text-wrap text-white font-bold text-5xl darker-background'>
        Sorry, you have to log in to access this page...
      </h2>
    </div>
  );
};
