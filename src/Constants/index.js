import relation from "../assets/relation.png";
import image from "../assets/image.png";
import contract from '../assets/contract.png';

export const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "https://twitter.com/Sanjaysk2108",
      title: "Twitter",
    },
  ];


export const featuresLinks = [
  {
    image:relation,
    title:"Multi chain Support",
    description: "Supporting multichain networks, our platform allows you to explore the hidden NFTs associated with your address. ",
  },
  {
    image:contract,
    title:"Smart Contract",
    description: "Find your NFT in your collection and simply paste your NFT contract",
  },
  {
    image:image,
    title:"image caching",
    description:"Experience lightning-fast retrieval of NFTs and their associated metadata, now up to 10 times faster"
  }
]