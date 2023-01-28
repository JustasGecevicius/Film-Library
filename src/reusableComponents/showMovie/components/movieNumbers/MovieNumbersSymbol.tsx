import React from "react";

interface Props {
    tag: string;
    number: number;
}

export const MovieNumbersSymbol: React.FC<Props> = ({ tag, number }) => {
    let value;

    switch (Math.round(number).toString().length) {
        case 3:
            value = number.toString();
            break;
        case 4:
            value = Math.round(number / 1000).toString() + "k";
            break;
        case 5:
            value = Math.round(number / 1000).toString() + "k";
            break;
        case 6:
            value = Math.round(number / 1000).toString() + "k";
            break;
        case 7:
            value = Math.round(number / 1000000).toString() + "m";
            break;
        case 8:
            value = Math.round(number / 1000000).toString() + "m";
            break;
        case 9:
            value = Math.round(number / 1000000).toString() + "m";
            break;
        case 10:
            value = Math.round(number / 1000000000).toString() + "b";
            break;
        case 11:
            value = Math.round(number / 1000000000).toString() + "b";
            break;
        case 12:
            value = Math.round(number / 1000000000).toString() + "b";
            break;
        default:
            value = number;
    }

    
    return (
        <div className="movieNumbersSymbol">
            <p className="movieNumberSymbolText">{tag + " | " + value}</p>
        </div>
    );
};
