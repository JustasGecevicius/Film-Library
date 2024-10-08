type PropsType = {
  departments: string[];
};

export const Departments = ({ departments }: PropsType) => (
  <div className='flex-row gap-x-2'>
    {departments.map((elem, index) => (
      <div
        key={index}
        className='px-2 py-1 border rounded-full dark:text-white dark:border-white'
      >
        {elem}
      </div>
    ))}
  </div>
);
