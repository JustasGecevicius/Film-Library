import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../../firebase/functions';
import { useFirebaseContext } from '../../context/FirebaseContext';
import { NavigationIcon } from './NavigationIcon';
import { checkIfImageExists } from '../functions';
import { ToggleDarkLightSwitch } from '../../utils/ToggleDarkLightSwitch';

export const Header = () => {
  const { userInfo, setDarkTheme, darkTheme } = useFirebaseContext();

  return (
    <div className='relative left-1/2 z-50 w-screen px-2 py-2 -translate-x-1/2 sm:px-4 sm:py-4'>
      <header className='flex flex-col items-center w-full max-w-6xl gap-2 p-2 mx-auto text-white border shadow-2xl bg-black/80 border-white/20 rounded-2xl backdrop-blur-xl md:flex-row md:justify-between md:gap-4 md:px-6 md:py-3'>
        <div className='flex items-center justify-between w-full gap-3 px-1 md:contents'>
          <Link
            className='min-w-0 md:order-1 md:shrink-0'
            to='/Film-Library'
          >
            <h2 className='text-xl font-bold text-white truncate font-noto sm:text-2xl md:text-3xl'>
              Discoverisms
            </h2>
          </Link>
          <div className='flex items-center gap-2 shrink-0 md:order-3 md:gap-4'>
            <ToggleDarkLightSwitch
              setDarkTheme={setDarkTheme}
              darkTheme={darkTheme}
            />
            {userInfo && checkIfImageExists('https://website/images/img.png') && (
              <img
                alt='userImage'
                className='object-cover w-8 h-8 rounded-full'
                src={userInfo.profileURL}
              />
            )}
            <button
              className='h-8 px-3 text-xs font-semibold text-white transition bg-transparent border rounded-full border-white/70 hover:bg-white hover:text-black sm:text-sm'
              onClick={userInfo ? signOutUser : signInUser}
            >
              {userInfo ? 'Sign Out' : 'Sign In'}
            </button>
          </div>
        </div>
        <ul className='grid w-full grid-cols-4 gap-1 pt-2 text-xs border-t border-white/15 md:order-2 md:flex md:w-auto md:gap-2 md:p-0 md:text-sm md:border-0'>
          <NavigationIcon
            iconName={'film'}
            link={'explore'}
            sectionName='Explore'
          />
          <NavigationIcon
            iconName={'camera'}
            link={'people'}
            sectionName='People'
          />
          <NavigationIcon
            iconName={'users'}
            link={'friends'}
            sectionName='Friends'
          />
          <NavigationIcon
            iconName={'user'}
            link={'user_profile'}
            sectionName='Profile'
          />
        </ul>
      </header>
    </div>
  );
};
