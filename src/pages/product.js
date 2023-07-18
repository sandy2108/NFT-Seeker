import NftCard from '@/components/NftCard';
import React, { useState } from 'react'


const product = () => {
  
  //set usestate for holiding user address
  const [address, setAddress] = useState("");

  //This one for Specific NFTs collection contract address
  const [collection , setCollection] = useState("");

  const[NFTs,setNFTs] = useState([]);

  const[fetchCollection, setFetchCollection] = useState(false);

  //Fetch NFTs from Alchmey 
  const fetchNFTs = async() => {
    let nfts;
    console.log("Fetching NFTs");
    const baseURL = "https://eth-mainnet.alchemyapi.io/v2/DQTqb0VvexXjpFaO_WyGpPnsm13qCse6/getNFTs/"
    

    if(!collection.length) {
       var requestOptions= {
        method: 'GET'
      };
       const fetchURL = `${baseURL}?owner=${address}`;

       nfts=await fetch(fetchURL,requestOptions).then(data => data.json())
    }else{
       console.log("Fetching nfts from collection owned by address")
       const fetchURL = `${baseURL}?owner=${address}&contractAddresses%5B%5D=${collection}`;
       nfts= await fetch(fetchURL, requestOptions).then(data => data.json())    
    }

    if(nfts){
      console.log("NFTS:", nfts)
      setNFTs(nfts.ownedNfts)
    }
  }

  const fetchNFTsForCollection = async () => {
    
    if(collection.length) {
       var requestOptions= {
        method: 'GET'
       };
       const baseURL = "https://eth-mainnet.alchemyapi.io/v2/DQTqb0VvexXjpFaO_WyGpPnsm13qCse6/getNFTsForCollection/";
       const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
       const nfts = await fetch(fetchURL,requestOptions).then(data => data.json())

       if(nfts){
        console.log("NFTs in Collections", nfts)
        setNFTs(nfts.nfts)
      }
    }
  }
   
  return (
    <div className='w-full navbarbg'>
       <div className='flex max-w-[1340px] mx-auto p-4'>
          <div className='flex min-h-screen flex-col items-center justify-center py-2'>
             <div>
                <input onChange={(e) => {setAddress(e.target.value)}} value={address} type="text" placeholder="Paster your wallet address"></input>
                <input onChange={(e) => {setCollection(e.target.value)}} value={collection} type="text" placeholder=' your NFT contract address'></input>
                <label><input onChange={(e)=>{setFetchCollection(e.target.checked)}} type={'checkbox'}/> For Collections </label>
                <button onClick={()=> {
                  if(fetchCollection){
                    fetchNFTsForCollection()
                  }else{
                    fetchNFTs()
                  }
                }}> Seek NFTs!</button>
             </div>

          </div>

          <div>
            {
              NFTs.length && NFTs.map(nft => {
                return(
                  <NftCard nft={nft}></NftCard>
                )
                
              })
            }
          </div>
        
       </div>
    </div>
  )
}

export default product