import { Link } from 'react-router-dom';

export const ViewAllButton = (props: { link: string }) => (
  <Link
    to={props.link}
    className='inline-flex items-center h-8 px-4 text-sm font-medium transition border rounded-full border-current hover:bg-white/10'
  >
    View all
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
  <div className='flex items-center justify-between gap-4'>
    <h2 className='text-2xl font-bold tracking-tight'>{title}</h2>
    {!!viewAll && <ViewAllButton link={link} />}
  </div>
);
