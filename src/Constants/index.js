import relation from "../assets/relation.png";
import image from "../assets/image.png";
import contract from '../assets/contract.png';
import sepolia from "../assets/medal.png";
import testnet from "../assets/testnet.png";
import search from "../assets/loupe.png";


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
    image:sepolia,
    title:"Sepolia Testnet Integration",
    description: "Be one of the first platforms to support the Sepolia Testnet, offering web3 developers a dedicated space to experiment with NFTs and NFTs Collection smart contracts.",
  },
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
  },
  {
    image:testnet,
    title:"Explorer Testnet NFT ",
    description:"Our technology enables you to discover the concealed NFTs connected to your address and supports the Ethereum and Polygon testnet networks."
  },
  {
    image:search,
    title:"NFT Collection Search",
    description:" paste your contract address and instantly explore all your associated NFTs, uncovering digital treasures in a breeze!",
  }
]