import { Link } from 'react-router-dom';

export const ViewAllButton = (props: { link: string }) => (
  <Link
    to={props.link}
    className='border border-black rounded-full hover:outline-2 hover:outline-black hover:outline dark:border-white h-7'
  >
    <button className='h-full px-2 hover:font-bold'>View All</button>
  </Link>
);

export const DisplayPosterHeader = ({
  link,
  title,
  viewAll = true,
}: {
  link: string;
  title: string;
  viewAll?: boolean;
}) => (
  <div className='flex flex-row items-center justify-between'>
    <h2 className='text-2xl italic font-bold'>{title}</h2>
    {!!viewAll && <ViewAllButton link={link} />}
  </div>
);
