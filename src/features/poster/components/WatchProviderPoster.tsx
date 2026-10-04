export interface WatchProviderPosterType {
  imageURL: string;
  providerName: string;
}

export const WatchProviderPoster = ({
  imageURL,
  providerName,
}: WatchProviderPosterType) => (
  <div className='flex items-center w-full gap-3 p-3 border bg-white/5 border-white/10 rounded-2xl sm:w-auto sm:min-w-52'>
    <img
      src={imageURL}
      alt={`${providerName} logo`}
      className='object-cover w-14 h-14 rounded-xl'
    />
    <p className='font-semibold text-white/80'>{providerName}</p>
  </div>
);
