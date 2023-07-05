const device = 'Page';

const headData = [
  {
    content: 'Depth 1',
    width: `22.5%`,
  },
  {
    content: 'Depth 2',
    width: `22.5%`,
  },
  {
    content: 'Depth 3',
    width: `22.5%`,
  },
  {
    content: '파일명',
    width: `22.5%`,
  },
  {
    content: '상태',
    width: `10%`,
  },
];

const list = [
  {
    content: 'Overview',
    children: [
      {
        link: 'overview/overview.html',
        name: 'overview',
        complete: true,
      },
    ],
  },
  {
    content: 'Principle',
    children: [
      {
        link: 'principle/principle.html',
        name: 'principle',
        complete: true,
      },
      {
        content: 'TV Environment',
        link: 'principle/tv.html',
        name: 'tv',
        complete: true,
      },
      {
        content: 'Contents',
        link: 'principle/contents.html',
        name: 'contents',
        complete: true,
      },
      {
        content: 'Navigation',
        link: 'principle/navigation.html',
        name: 'navigation',
        complete: true,
      },
      {
        content: 'Respect for Legacy',
        link: 'principle/legacy.html',
        name: 'legacy',
        complete: true,
      },
      {
        content: 'Accessibility',
        link: 'principle/accessibility.html',
        name: 'accessibility',
        complete: true,
      },
    ],
  },
  {
    content: 'Foundation',
    children: [
      {
        link: 'foundation/ios/foundation.html',
        name: 'foundation',
        complete: true,
      },
      {
        content: 'Color',
        link: 'foundation/ios/color.html',
        name: 'color',
        complete: true,
      },
      {
        content: 'Typography',
        link: 'foundation/ios/typography.html',
        name: 'typography',
        complete: true,
      },
      {
        content: 'Iconography',
        link: 'foundation/ios/iconography.html',
        name: 'iconography',
        complete: true,
      },
      {
        content: 'Layout',
        link: 'foundation/ios/layout.html',
        name: 'layout',
        complete: true,
      },
      {
        content: 'Focus',
        link: 'foundation/ios/focus.html',
        name: 'focus',
        complete: true,
      },
      {
        content: 'Motion',
        link: 'foundation/ios/motion.html',
        name: 'motion',
        complete: true,
      },
    ],
  },
  {
    content: 'Components',
    children: [
      {
        link: 'components/ios/components.html',
        name: 'components',
        complete: true,
      },
      {
        content: 'Badges',
        link: 'components/ios/badges.html',
        name: 'badges',
        complete: true,
      },
      {
        content: 'Booting',
        link: 'components/ios/booting.html',
        name: 'booting',
        complete: true,
      },
      {
        content: 'Buttons',
        link: 'components/ios/buttons.html',
        name: 'buttons',
        complete: true,
      },
      {
        content: 'Controls',
        children: [
          {
            content: 'Checkbox',
            link: 'components/ios/checkbox.html',
            name: 'checkbox',
            complete: true,
          },
          {
            content: 'Radio Button',
            link: 'components/ios/radio.html',
            name: 'radio',
            complete: true,
          },
          {
            content: 'Switch',
            link: 'components/ios/switch.html',
            name: 'switch',
            complete: true,
          },
          {
            content: 'Slider',
            link: 'components/ios/slider.html',
            name: 'slider',
            complete: true,
          },
        ],
      },
      {
        content: 'Dropdowns',
        link: 'components/ios/dropdowns.html',
        name: 'dropdowns',
        complete: true,
      },
      {
        content: 'GNB',
        link: 'components/ios/gnb.html',
        name: 'gnb',
        complete: true,
      },
      {
        content: 'Inputs',
        link: 'components/ios/inputs.html',
        name: 'inputs',
        complete: true,
      },
      {
        content: 'IME',
        link: 'components/ios/ime.html',
        name: 'ime',
        complete: true,
      },
      {
        content: 'List Cards',
        link: 'components/ios/list_cards.html',
        name: 'list_cards',
        complete: true,
      },
      {
        content: 'Loading',
        link: 'components/ios/loading.html',
        name: 'loading',
        complete: true,
      },
      {
        content: 'Pagination',
        link: 'components/ios/pagination.html',
        name: 'pagination',
        complete: true,
      },
      {
        content: 'Player',
        link: 'components/ios/player.html',
        name: 'player',
        complete: true,
      },
      {
        content: 'Popup',
        link: 'components/ios/popup.html',
        name: 'popup',
        complete: true,
      },
      {
        content: 'Splash',
        link: 'components/ios/splash.html',
        name: 'splash',
        complete: true,
      },
      {
        content: 'Tabs',
        link: 'components/ios/tabs.html',
        name: 'tabs',
        complete: true,
      },
      {
        content: 'Tooltip',
        link: 'components/ios/tooltip.html',
        name: 'tooltip',
        complete: true,
      },
    ],
  },
];

export default { device: device, headData: headData, list: list };
