import { useDisplayName } from '../features/welcomeScreen/hooks';
import { Header } from '../features/header/components/Header';
import { DarkBackground } from '../features/utils/DarkBackground';

export default function Home() {
  const displayName = useDisplayName();

  return (
    <div
      className='w-screen h-screen px-8'
      style={{ backgroundImage: `url(/Film-Library/background.avif)` }}
    >
      <Header />
      <DarkBackground />
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
  );
}
