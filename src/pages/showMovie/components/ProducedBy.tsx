interface Props {
    productionCompanies: Object[];
}

// interface Producer{
//     name:string;
//     logo_path:string;
// }

export const ProducedBy: React.FC<Props> = ({ productionCompanies }) => {
    return (
        <div className="producedBy">
            <div className="producedByWidth">
                <h3 className="productionCompany"> Production Companies</h3>
                <div className="cards">
                    {productionCompanies.map((elem: any, index: number) => {
                        return (
                            <div key={index} className="producerCard">
                                <div
                                    className="producerLogo"
                                    style={{
                                        backgroundImage: `url(${elem["logo_path"]})`,
                                    }}
                                ></div>
                                <p className="producerName">{elem["name"]}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
