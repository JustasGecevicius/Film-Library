import { ProducedByType } from "features/movies/types";

export const ProducedBy = ({ productionCompanies } : ProducedByType) => {
    return (
        <div className="producedBy">
            <div className="producedByWidth">
                <h3 className="productionCompany"> Production Companies</h3>
                <div className="cards">
                    {productionCompanies.map((elem, index) => {
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
