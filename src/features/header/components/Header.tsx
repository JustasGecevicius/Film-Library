import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../../firebase/functions';
import { useFirebaseContext } from '../../context/FirebaseContext';
import { NavigationIcon } from './NavigationIcon';
import { checkIfImageExists } from '../functions';
import { ToggleDarkLightSwitch } from '../../utils/ToggleDarkLightSwitch';

export const Header = () => {
  const { userInfo, setDarkTheme, darkTheme } = useFirebaseContext();

  return (
    <header className='relative z-50 flex flex-row flex-wrap items-center justify-around w-full max-w-4xl p-2 mx-auto bg-white dark:bg-black rounded-b-md gap-y-1'>
      <Link to='/Film-Library'>
        <h2 className='text-3xl font-bold font-noto dark:text-white'>
          Discoverisms
        </h2>
      </Link>
      <ul className='flex-row items-center gap-x-4'>
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
      <div className='flex-row items-center gap-x-4'>
        <ToggleDarkLightSwitch
          setDarkTheme={setDarkTheme}
          darkTheme={darkTheme}
        />
        {userInfo && checkIfImageExists('http://website/images/img.png') && (
          <img
            alt='userImage'
            className='userImage'
            src={userInfo.profileURL}
          />
        )}
        <button
          className='px-2 border border-black rounded-full dark:border-white dark:bg-black dark:text-white h-7'
          onClick={userInfo ? signOutUser : signInUser}
        >
          {userInfo ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
    </header>
  );
};
