import { Header } from '../features/header/components/Header';
import { useBackground } from '../features/welcomeScreen/hooks';

export const NoUser = () => {
  const background = useBackground();

  return (
    <div
      className='w-screen min-h-screen flex-col'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <h2 className='p-2 mx-8 my-auto text-5xl font-bold text-center text-white text-wrap w-fit darker-background self-center'>
        Sorry, you have to log in to access this page...
      </h2>
    </div>
  );
};
