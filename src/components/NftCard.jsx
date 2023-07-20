import Link from "next/link";
import { useState } from "react";
import {TbExternalLink} from "react-icons/tb";


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
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-blue-400 hover:border-2 border-black">
        <div className="hover:scale-9 hover:opacity-75 ">
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
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <p className="m-2 font-bold text-md text-black">{nft.title}</p>
            <p className="m-2 font-bold text-sm text-black">ID:{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
          </div>
          <div className="flex justify-between py-[4px]">
            <p className="text-md text-red-400 mx-2 font-bold"> <span className="text-white font-md">{nft.contractMetadata.symbol}</span></p>
            <Link href={`https://etherscan.io/token/${nft.contract.address}`} className="text-md text-white mx-2 flex  font-bold cursor-pointer">Etherscan <TbExternalLink className="my-1 ml-1"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;


