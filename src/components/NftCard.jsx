import Link from "next/link";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";

const NftCard = ({ nft, selectedNetwork }) => {
  const [isImageLoaded, setImageLoaded] = useState(true);
  const isGatewayValid = nft.media[0].gateway.startsWith("https://nft-cdn.alchemy.com/") || nft.media[0].gateway.startsWith("https://ipfs.io/");

  const placeholderImage = "https://via.placeholder.com/400";

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const [isLoading, setLoading] = useState(true);

  const getDomain = (selectedNetwork) => {
    switch (selectedNetwork) {
      case "eth-mainnet":
        return ["etherscan.io", "Etherscan"];
      case "eth-sepolia":
        return ["sepolia.etherscan.io", "Ethereum Sepolia"];
      case "eth-goerli":
        return ["goerli.etherscan.io", "Ethereum Goerli"];
      case "polygon-mainnet":
        return ["polygonscan.com", "Polygonscan"];
      case "polygon-mumbai":
        return ["mumbai.polygonscan.com", "Polygon Mumbai"];
      case "arb-mainnet":
        return ["arbiscan.io", "Arbiscan"];
      case "opt-mainnet":
        return ["optimistic.etherscan.io", "Optimism"];
      default:
        return ["etherscan.io", "Etherscan"]; // Default to Ethereum Mainnet domain
    }
  };

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
              className="group-hover:opacity-75 duration-700 ease-in-out"
              onError={handleImageError}
            
            />
          ) : (
            <video
              src={isGatewayValid ? nft.media[0].gateway : placeholderImage}
              alt="/"
              layout="fill"
              objectFit="cover"
              autoPlay
              loop
              muted
              className="group-hover:opacity-75 duration-700 ease-in-out"
              onError={handleImageError}
            
            />
          )}
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <p className="m-2 font-bold text-md text-black">{nft.title}</p>
            <p className="m-2 font-bold text-sm text-black">
              ID:{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}
            </p>
          </div>
          <div className="flex justify-between py-[4px]">
            {nft?.contractMetadata?.symbol ? (
              <p className="text-md text-red-400 mx-2 font-bold">
                <span className="text-white font-md">
                  {nft.contractMetadata.symbol}
                </span>
              </p>
            ) : (
              <p className="text-md text-white mx-2 font-bold">N/A</p>
            )}
            <Link
              href={`https://${getDomain(selectedNetwork)[0]}/token/${
                nft.contract.address
              }`}
              className="text-md text-white mx-2 flex  font-bold cursor-pointer"
            >
              {" "}
              {getDomain(selectedNetwork)[1]}{" "}
              <TbExternalLink className="my-1 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
