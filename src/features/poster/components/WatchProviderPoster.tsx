import '../css/poster.css';
export interface WatchProviderPosterType {
  imageURL: string;
  providerName: string;
}

export const WatchProviderPoster = ({
  imageURL,
  providerName,
}: WatchProviderPosterType) => {
  return (
    <div className='imagePoster'>
      <img src={imageURL} alt='posterImage' className='providerImage' />
      <div className='posterText'>
        <p className='title'>{providerName}</p>
      </div>
    </div>
  );
};
