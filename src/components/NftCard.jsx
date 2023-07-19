import { useState } from "react";

const NftCard = ({ nft }) => {
  const [isImageLoaded, setImageLoaded] = useState(true);
  const isGatewayValid = nft.media[0].gateway.startsWith("https://nft-cdn.alchemy.com/eth-mainnet/");
  const placeholderImage = "https://via.placeholder.com/400";

  const [isLoading, setLoading] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  function helperfunction(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <div className="hover:border cursor-pointer hover:scale-9 border-blue-600">
          {isImageLoaded ? (
            <img
              src={isGatewayValid ? nft.media[0].gateway : placeholderImage}
              alt="/"
              layout="fill"
              objectFit="cover"
              className={helperfunction('group-hover:opacity-75 duration-700 ease-in-out', isLoading ? 'grayscale blur-xl scale-110' : 'grayscale-0 blur-0 scale-100')}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ) : (
            <video
              src={isGatewayValid ? nft.media[0].gateway : placeholderImage}
              alt="/"
              layout="fill"
              autoPlay
              loop
              muted
              className={helperfunction('group-hover:opacity-75 duration-700 ease-in-out', isLoading ? 'grayscale blur-xl scale-110' : 'grayscale-0 blur-0 scale-100')}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          )}
        </div>
        <div className="flex flex-col bg-gray-700">
          <div className="flex justify-between">
            <p className="m-2 font-bold text-md text-white">{nft.title}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md text-white m-2 font-bold">Symbol: <span className="text-red-200 font-md">{nft.contractMetadata.symbol}</span></p>
            <p className="text-md text-white m-2 font-bold">Type: <span className="text-red-200 font-md">{nft.contractMetadata.tokenType}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;


