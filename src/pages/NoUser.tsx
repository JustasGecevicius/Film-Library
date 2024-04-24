import { Header } from '../features/header/components/Header';
import { useBackground } from '../features/welcomeScreen/hooks';

export const NoUser = () => {
  const background = useBackground();

  return (
    <div className='noUser' style={{ backgroundImage: `url(${background})` }}>
      <div className='noUserWrapper'>
        <Header />
        <h2 className='sorryMessage'>Sorry, you have to log in to access this page...</h2>
      </div>
    </div>
  );
};
