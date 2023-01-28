import React from "react";
import { MovieNumbersSymbol } from "./MovieNumbersSymbol";

interface Props {
    budget: number;
    revenue: number;
    runtime: number;
    voteAverage: number;
}

export const MovieNumbers: React.FC<Props> = ({
    budget,
    revenue,
    runtime,
    voteAverage,
}) => {
    return (
        <div className="movieNumbers">
            <div className="movieNumbersWidth">
                <MovieNumbersSymbol
                    tag="Budget"
                    number={budget}
                ></MovieNumbersSymbol>
                <MovieNumbersSymbol
                    tag="Revenue"
                    number={revenue}
                ></MovieNumbersSymbol>

                <MovieNumbersSymbol
                    tag="Runtime"
                    number={runtime}
                ></MovieNumbersSymbol>

                <MovieNumbersSymbol
                    tag="Vote Average"
                    number={voteAverage}
                ></MovieNumbersSymbol>
            </div>
        </div>
    );
};
