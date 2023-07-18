
import Image from "next/image"

const NftCard = ({nft}) => {
  return (
    <div>
        <div>
           <img src={nft.media[0].gateway}></img>
        </div>
        <p>{nft.title}</p>
    </div>
  )
}

export default NftCard