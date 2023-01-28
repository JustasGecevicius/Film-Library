import { ProducerCard } from "./ProducerCard";

interface Props {
    productionCompanies: Object[];
}

export const ProducedBy: React.FC<Props> = ({ productionCompanies }) => {
    //console.log(productionCompanies);
    return (
        <div className="producedBy">
            <div className="producedByWidth">
                <h3 className="productionCompany"> Production Companies</h3>
                <div className="cards">
                    {productionCompanies.map((elem, index) => {
                        return <ProducerCard cardData={elem} key={index}/>;
                    })}
                </div>
            </div>
        </div>
    );
};
