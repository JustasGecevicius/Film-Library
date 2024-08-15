import { CircularProgressbar } from "react-circular-progressbar";

type CircularProgressBarAveragesType = {
  average: number | undefined;
  text: string;
};

type CircularProgressBarNumbersType = {
  number: number | undefined;
  text: string;
};

export const CircularProgressBarAverages = ({
  average = 0,
  text,
}: CircularProgressBarAveragesType) => (
  <div className='flex-col items-center justify-center w-20 text-center'>
    <div className='w-16'>
      <CircularProgressbar
        value={average ? average : 0}
        minValue={0}
        maxValue={10}
        text={`${average}`}
        strokeWidth={15}
      />
    </div>
    <p className='font-bold text-white min-h-16 text-wrap'>{text}</p>
  </div>
);

export const CircularProgressBarNumbers = ({
  number = 0,
  text,
}: CircularProgressBarNumbersType) => (
  <div className='flex-col items-center justify-center w-20 text-center'>
    <div className='w-16'>
      <CircularProgressbar
        value={number ? number : 0}
        minValue={0}
        maxValue={number * 2}
        text={`${number}`}
        strokeWidth={15}
      />
    </div>
    <p className='font-bold text-white min-h-16 text-wrap'>{text}</p>
  </div>
);