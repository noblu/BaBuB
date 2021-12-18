import { MenuEntry } from '@pancakeswap-libs/uikit'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'PoolIcon',
    href: 'https://pancakeswap.finance/',
  },
  {
    label: 'Buy $BABBU',
    icon: 'PoolIcon',
    href: 'https://pancakeswap.finance/',
  },
  {
    label: 'NFT Mining',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'Babbu Family NFT',
        href: '/migrate',
      },
      {
        label: 'Babbu Friends Card',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Crystal Stone',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
      {
        label: 'Bounty',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pancakeswap.finance/farms',
  },
  {
    label: 'NFT Market',
    icon: 'PoolIcon',
    href: 'https://pancakeswap.finance/pools',
  },
  {
    label: 'Gamebase',
    icon: 'PredictionsIcon',
    href: 'https://pancakeswap.finance/prediction',
  },
  {
    label: 'Babbu NFT',
    icon: '',
    items: [
      {
        label: 'Babbu NFT Box',
        href: 'https:/google.com.vn',
      },
      {
        label: 'NFT Mint',
        href: 'https://pancakeswap.finance/profile/tasks',
      }
    ]
  },
  {
    label: 'Bounty',
    icon: 'TicketIcon',
    href: 'https://pancakeswap.finance/lottery',
  },
  {
    label: 'Guide',
    icon: 'NftIcon',
    href: 'https://pancakeswap.finance/nft',
  },
  {
    label: 'Community',
    icon: 'TeamBattleIcon',
    href: 'https://pancakeswap.finance/competition',
  },
   
  {
    label: 'Help Center',
    icon: 'IfoIcon',
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'About BABBU',
    icon: 'IfoIcon',
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'App Download',
    icon: 'IfoIcon',
    href: 'https://pancakeswap.finance/ifo',
  },
]

export default config
