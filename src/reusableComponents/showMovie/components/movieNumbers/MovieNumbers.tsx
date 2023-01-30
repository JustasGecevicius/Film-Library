import React from "react";
import { tagFixer } from "./functions";
import { MovieNumbersSymbol } from "./MovieNumbersSymbol";
import { Props } from "./type";

export const MovieNumbers = (props : Props) => {
    const fixedProps = tagFixer(props);

    return (
        <div className="movieNumbers">
            <div className="movieNumbersWidth">
                {fixedProps.map((elem : any, index : number) => {
                    if (elem[1] !== 0) {
                        return (
                            <MovieNumbersSymbol
                                tag={elem[0]}
                                number={elem[1]}
                                key={index}
                            ></MovieNumbersSymbol>
                        );
                    }
                })}
            </div>
        </div>
    );
};
