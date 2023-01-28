import React from 'react'

interface Props {
id:string | undefined
}

export const LikeAndRate: React.FC<Props> = ({id}) => {
                return (<div className='likeAndRate'>
                        <div className='likeAndRateWidth'>
                                <button className='like'>Like</button>
                                <form className='rateForm'>
                                        <input className="rateInput" type="number" max="10" min="0"></input>
                                        <button className="rateButton" type='submit'>Rate</button>
                                </form>
                        </div>
                </div>);
}