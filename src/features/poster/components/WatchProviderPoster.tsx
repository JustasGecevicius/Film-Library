export interface WatchProviderPosterType {
  imageURL: string;
  providerName: string;
}

export const WatchProviderPoster = ({
  imageURL,
  providerName,
}: WatchProviderPosterType) => (
  <div className='relative flex-col imagePoster gap-y-4 max-w-48'>
    <img
      src={imageURL}
      alt='posterImage'
      className='rounded-lg h-[278px] w-[185px] bg-no-repeat bg-center bg-cover'
    />
    <div className='posterText'>
      <p className='title'>{providerName}</p>
    </div>
  </div>
);
