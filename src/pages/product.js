import NftCard from "@/components/NftCard";
import React, { useState } from "react";

const product = () => {
  //set usestate for holiding user address
  const [address, setAddress] = useState("");

  //This one for Specific NFTs collection contract address
  const [collection, setCollection] = useState("");

  const [NFTs, setNFTs] = useState([]);

  const [fetchCollection, setFetchCollection] = useState(false);

  const [result, setResult] = useState(true);

  const [selectedNetwork, setSelectedNetwork] = useState("eth-mainnet");

  //Fetch NFTs from Alchmey
  const fetchNFTs = async () => {
    let nfts;
    console.log("Fetching NFTs");
    const baseURL = `https://${selectedNetwork}.g.alchemy.com/v2/DQTqb0VvexXjpFaO_WyGpPnsm13qCse6/getNFTs/`;

    if (!collection.length) {
      var requestOptions = {
        method: "GET",
      };
      const fetchURL = `${baseURL}?owner=${address}`;

      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    } else {
      console.log("Fetching nfts from collection owned by address");
      const fetchURL = `${baseURL}?owner=${address}&contractAddresses%5B%5D=${collection}`;
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    }

    if (nfts) {
      console.log("NFTS:", nfts);
      setNFTs(nfts.ownedNfts);
    }
  };

  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: "GET",
      };
      const baseURL = `https://${selectedNetwork}.g.alchemy.com/v2/DQTqb0VvexXjpFaO_WyGpPnsm13qCse6/getNFTsForCollection/`;

      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await fetch(fetchURL, requestOptions).then((data) =>
        data.json()
      );

      if (nfts) {
        console.log("NFTs in Collections", nfts);
        setNFTs(nfts.nfts);
      }
    }
  };

  return (
    <div className="w-full min-h-screen blockchainbg">
      <div className="max-w-[1240px] mx-auto p-4">
        <div className="w-full grid grid-cols-1 ">
          <div className="flex flex-col justify-center">
            <div className="max-w-[400px] w-full mx-auto p-4 shadow-lg shadow-black">
              <h2 className="text-4xl font-bold text-center py-6 ">
                Fetch your collections
              </h2>
              <div className="flex flex-col py-2 ">
                <label>WALLET ADDRESS</label>
                <input
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                  type="text"
                  placeholder="Paster your wallet address"
                  className="border p-2"
                ></input>
              </div>
              <div className="flex flex-col py-2">
                <label>NFT Contract address</label>
                <input
                  onChange={(e) => {
                    setCollection(e.target.value);
                  }}
                  value={collection}
                  type="text"
                  placeholder=" your NFT contract address"
                  className="border p-2"
                ></input>
              </div>

              <div className="flex  justify-between ">
                <label className="flex items-center ">
                  <input
                    onChange={(e) => {
                      setFetchCollection(e.target.checked);
                    }}
                    type={"checkbox"}
                    className="mr-2"
                  />{" "}
                  For Collections{" "}
                </label>
                <select
                  value={selectedNetwork}
                  onChange={(e) => setSelectedNetwork(e.target.value)}
                  className=""
                >
                  <option value="eth-mainnet">Ethereum Mainnet</option>
                  <option value="eth-sepolia">Ethereum Sepolia</option>
                  <option value="eth-goerli">Ethereum Goerli</option>
                  <option value="polygon-mainnet">Polygon Mainnet</option>
                  <option value="polygon-mumbai">Polygon Mumbai</option>
                  <option value="arb-mainnet">Arbitrum</option>
                  <option value="opt-mainnet">Optimism</option>
                </select>
              </div>
              <button
                onClick={() => {
                  if (fetchCollection) {
                    fetchNFTsForCollection();
                  } else {
                    fetchNFTs();
                  }
                  setResult(!result);
                }}
                className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                {" "}
                Seek NFTs!
              </button>
            </div>
          </div>
        </div>
        <div className="my-10">
          {NFTs.length > 0 ? (
            <div className="my-10">
              <h1 className="text-2xl md:text-4xl font-bold text-gradient flex items-center justify-center">
                Your Collections
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
                {NFTs.map((nft, index) => (
                  <NftCard
                    key={index}
                    nft={nft}
                    selectedNetwork={selectedNetwork}
                  />
                ))}
              </div>
            </div>
          ) : result ? undefined : (
            <p className="flex items-center justify-center text-2xl font-bold text-black..">
              Oops !.. NO NFTS FOUND
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default product;
