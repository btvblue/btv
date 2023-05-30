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
        link: 'foundation/foundation.html',
        name: 'foundation',
        complete: true,
      },
      {
        content: 'Color',
        link: 'foundation/color.html',
        name: 'color',
        complete: true,
      },
      {
        content: 'Typography',
        link: 'foundation/typography.html',
        name: 'typography',
        complete: true,
      },
      {
        content: 'Iconography',
        link: 'foundation/iconography.html',
        name: 'iconography',
        complete: true,
      },
      {
        content: 'Layout',
        link: 'foundation/layout.html',
        name: 'layout',
        complete: true,
      },
      {
        content: 'Focus',
        link: 'foundation/focus.html',
        name: 'focus',
        complete: true,
      },
      {
        content: 'Motion',
        link: 'foundation/motion.html',
        name: 'motion',
        complete: true,
      },
    ],
  },
  {
    content: 'Components',
    children: [
      {
        link: 'components/components.html',
        name: 'components',
        complete: true,
      },
      {
        content: 'Badges',
        link: 'components/badges.html',
        name: 'badges',
        complete: true,
      },
      {
        content: 'Booting',
        link: 'components/booting.html',
        name: 'booting',
        complete: true,
      },
      {
        content: 'Buttons',
        link: 'components/buttons.html',
        name: 'buttons',
        complete: true,
      },
      {
        content: 'Controls',
        children: [
          {
            content: 'Checkbox',
            link: 'components/checkbox.html',
            name: 'checkbox',
            complete: true,
          },
          {
            content: 'Radio Button',
            link: 'components/radio.html',
            name: 'radio',
            complete: true,
          },
          {
            content: 'Switch',
            link: 'components/switch.html',
            name: 'switch',
            complete: true,
          },
          {
            content: 'Slider',
            link: 'components/slider.html',
            name: 'slider',
            complete: true,
          },
        ],
      },
      {
        content: 'Dropdowns',
        link: 'components/dropdowns.html',
        name: 'dropdowns',
        complete: true,
      },
      {
        content: 'GNB',
        link: 'components/gnb.html',
        name: 'gnb',
        complete: true,
      },
      {
        content: 'Inputs',
        link: 'components/inputs.html',
        name: 'inputs',
        complete: true,
      },
      {
        content: 'IME',
        link: 'components/ime.html',
        name: 'ime',
        complete: true,
      },
      {
        content: 'List Cards',
        link: 'components/list_cards.html',
        name: 'list_cards',
        complete: true,
      },
      {
        content: 'Loading',
        link: 'components/loading.html',
        name: 'loading',
        complete: true,
      },
      {
        content: 'Pagination',
        link: 'components/pagination.html',
        name: 'pagination',
        complete: true,
      },
      {
        content: 'Player',
        link: 'components/player.html',
        name: 'player',
        complete: true,
      },
      {
        content: 'Popup',
        link: 'components/popup.html',
        name: 'popup',
        complete: true,
      },
      {
        content: 'Splash',
        link: 'components/splash.html',
        name: 'splash',
        complete: true,
      },
      {
        content: 'Tabs',
        link: 'components/tabs.html',
        name: 'tabs',
        complete: true,
      },
      {
        content: 'Tooltip',
        link: 'components/tooltip.html',
        name: 'tooltip',
        complete: true,
      },
    ],
  },
];

export default { device: device, headData: headData, list: list };
