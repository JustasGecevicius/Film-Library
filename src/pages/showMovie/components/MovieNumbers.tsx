import { tagFixer } from "features/movies/functions";

export const MovieNumbers = (props : any) => {
    const fixedProps = tagFixer(props);
    return (
        <div className="movieNumbers">
            <div className="movieNumbersWidth">
                {fixedProps.map((elem : any, index : number) => {
                    if (elem[1] !== 0) {
                        return (
                            <div className="movieNumbersSymbol" key={index}>
                            <p className="movieNumberSymbolText">{elem[0] + " | " + elem[1]}</p>
                        </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
