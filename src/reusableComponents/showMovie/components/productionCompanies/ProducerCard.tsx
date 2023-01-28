interface Props {
    cardData: any;
}


export const ProducerCard: React.FC<Props> = ({ cardData }) => {
    return (
        <div className="producerCard">
            <div className="producerLogo" style={{backgroundImage: `url(${cardData["logo_path"]})`}}></div>
            <p className="producerName">{cardData["name"]}</p>
        </div>
    );
};
