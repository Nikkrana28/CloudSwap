import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t("TRADE"),
    icon: '',
    href: '',
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },

  {
    label: t('EARN'),
    href: '/earn',
    icon: '',
    items: [
      // {
      //   label: t('Farms'),
      //   href: '/farms',
      // },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },

  {
    label: t('NFT MARKETPLACE'),
    href: '/nftmarket',
    icon: '',
    items: [
      // {
      //   label: t('Farms'),
      //   href: '/farms',
      // },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },
  {
    label: t('PRESALE'),
    href: '/presale',
    icon: '',
    items: [
      // {
      //   label: t('Farms'),
      //   href: '/farms',
      // },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },
  {
    label: t('AIRDROP'),
    href: '/airdrop',
    icon: 'Earn',
    items: [
      // {
      //   label: t('Farms'),
      //   href: '/farms',
      // },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },
  {
    label: t('BLOCKCHAIN ACADEMY'),
    href: '/acedemy',
    icon: 'Earn',
    items: [
      // {
      //   label: t('Farms'),
      //   href: '/farms',
      // },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },
  {
    label: t('INFO AND DOCS'),
    href: '/information',
    icon: 'Earn',
    items: [
      // {
      //   label: t('Farms'),
      //   href: '/farms',
      // },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },
  
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: 'Trophy',
  //   items: [
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  // {
  //   label: t('NFT'),
  //   href: `${nftsBaseUrl}`,
  //   icon: 'Nft',
  //   items: [
  //     {
  //       label: t('Overview'),
  //       href: `${nftsBaseUrl}`,
  //     },
  //     {
  //       label: t('Collections'),
  //       href: `${nftsBaseUrl}/collections`,
  //     },
  //   ],
  // },
  // {
  //   label: '',
  //   href: '/info',
  //   icon: 'More',
  //   hideSubNav: true,
  //   items: [
  //     {
  //       label: t('Info'),
  //       href: '/info',
  //     },
  //     {
  //       label: t('IFO'),
  //       href: '/ifo',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://medium.com/pancakeswap',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.pancakeswap.finance',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
]

export default config
