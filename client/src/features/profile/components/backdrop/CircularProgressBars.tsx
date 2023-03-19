import { CircularProgressbar } from "react-circular-progressbar";

interface CircularProgressBarAveragesType {
average : number | undefined
text : string
}

interface CircularProgressBarNumbersType {
  number : number | undefined
  text : string
  }

export const CircularProgressBarAverages = ({average = 0, text} : CircularProgressBarAveragesType) => {
    return (<div className="progressBarWrap">
      <div className="progressBarWidthRestriction">
        <CircularProgressbar
          value={
            average
              ? average
              : 0
          }
          minValue={0}
          maxValue={10}
          text={`${average}`}
          strokeWidth={15}
        />
      </div>
      <p className="progressBarText">{text}</p>
    </div>);
}

export const CircularProgressBarNumbers = ({number = 0, text} : CircularProgressBarNumbersType) => {
  return (<div className="progressBarWrap">
    <div className="progressBarWidthRestriction">
      <CircularProgressbar
        value={
          number
            ? number
            : 0
        }
        minValue={0}
        maxValue={number * 2}
        text={`${number}`}
        strokeWidth={15}
      />
    </div>
    <p className="progressBarText">{text}</p>
  </div>);
}