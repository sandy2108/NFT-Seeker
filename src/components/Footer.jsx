import Link from 'next/link';

const footerLinks = [
  {
    title: 'About NFT Seeker',
    content: 'NFT Seeker is an innovative app that allows you to discover, track, and analyze NFTs across multiple blockchains. Stay up-to-date with the latest trends and find unique digital assets with ease.'
  },
  {
    title: 'Quick Links',
    content: [
      { text: 'Home', href: '/' },
      { text: 'Explorer', href: '/product' },
      { text: 'Twitter', href: 'https://twitter.com/Sanjaysk2108' },
    ]
  },
  {
    title: 'Supported Blockchains',
    content: [
      { text: 'Ethereum', href: '/product' },
      { text: 'Polygon', href: '/product' },
      { text: 'Arbitrum', href: '/product' },
      { text: 'optimism', href: '/product' },
      { text: 'Goerli Testnet', href: '/product' },
      { text: 'Sepolia Testnet', href: '/product' },
      { text: 'Polygon Mumbai', href: '/product' },
    ]
  },
  {
    title: 'Contact Us',
    content: 'Email: sandy2108@protonmail.com'
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1340px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((linkGroup, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-semibold text-white">{linkGroup.title}</h3>
              {typeof linkGroup.content === 'string' ? (
                <p className="mt-4">{linkGroup.content}</p>
              ) : (
                <ul className="mt-4">
                  {linkGroup.content.map((link, index) => (
                    <li key={index} className='my-2'><Link href={link.href}>{link.text}</Link></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} NFT Seeker. All rights reserved.</p>
      </div>
    </footer>
  );
}
