import React from 'react'

interface Props {
        overview:string;
}

export const Description: React.FC<Props> = ({overview}) => {
                return (<div className='overview'>
                        <div className="overviewWidth">
                                <p className="overview">{overview}</p>
                        </div>
                </div>);
}