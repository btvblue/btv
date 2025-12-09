/*
pageLabel : Tab 이름

category : 카테고리
dirRoute : 폴더 이름
pageName : 페이지 이름
fileName : 파일 이름
progress : 진행 상태 ( 완료, 진행중 )
*/
const dataCommon = {
  device: '공통',
  headData: [
    {
      content: 'Depth 1',
      width: `30%`,
    },
    {
      content: 'Depth 2',
      width: `30%`,
    },
    {
      content: '파일명',
      width: `30%`,
    },
    {
      content: '상태',
      width: `10%`,
    },
  ],
  list: [
    {
      content: 'Priciple',
      children: [
        {
          name: 'principle/principle.html',
          link: 'principle/principle.html',
          content: 'Principle',
          complete: true,
        },
        {
          name: 'principle/tv.html',
          link: 'principle/tv.html',
          content: 'TV Environment',
          complete: true,
        },
        {
          name: 'principle/contents.html',
          link: 'principle/contents.html',
          content: 'Contents',
          complete: true,
        },
        {
          name: 'principle/navigation.html',
          link: 'principle/navigation.html',
          content: 'Navigation',
          complete: true,
        },
        {
          name: 'principle/legacy.html',
          link: 'principle/legacy.html',
          content: 'Respect for Legacy',
          complete: true,
        },
        {
          name: 'principle/accessibility.html',
          link: 'principle/accessibility.html',
          content: 'Accessibility',
          complete: true,
        },
      ],
    },
  ],
};

const dataIos = {
  device: 'iOS',
  headData: [
    {
      content: 'Depth 1',
      width: `30%`,
    },
    {
      content: 'Depth 2',
      width: `30%`,
    },
    {
      content: '파일명',
      width: `30%`,
    },
    {
      content: '상태',
      width: `10%`,
    },
  ],
  list: [
    {
      content: 'Overview',
      children: [
        {
          name: 'overview/overview.html',
          link: 'overview/overview.html',
          content: 'Overview',
          complete: true,
        },
      ],
    },
    {
      content: 'Foundation',
      children: [
        {
          name: 'foundation/ios/foundation.html',
          link: 'foundation/ios/foundation.html',
          content: 'Foundation',
          complete: true,
        },
        {
          name: 'foundation/ios/color.html',
          link: 'foundation/ios/color.html',
          content: 'Color',
          complete: true,
        },
        {
          name: 'foundation/ios/typography.html',
          link: 'foundation/ios/typography.html',
          content: 'Typography',
          complete: true,
        },
        {
          name: 'foundation/ios/iconography.html',
          link: 'foundation/ios/iconography.html',
          content: 'Iconography',
          complete: true,
        },
        {
          name: 'foundation/ios/layout.html',
          link: 'foundation/ios/layout.html',
          content: 'Layout',
          complete: true,
        },
        {
          name: 'foundation/ios/focus.html',
          link: 'foundation/ios/focus.html',
          content: 'Focus',
          complete: true,
        },
        {
          name: 'foundation/ios/motion.html',
          link: 'foundation/ios/motion.html',
          content: 'Motion',
          complete: true,
        },
      ],
    },
    {
      content: 'Components',
      children: [
        {
          name: 'components/ios/components.html',
          link: 'components/ios/components.html',
          content: 'Components',
          complete: true,
        },
        {
          name: 'components/ios/badges.html',
          link: 'components/ios/badges.html',
          content: 'Badges',
          complete: true,
        },
        {
          name: 'components/ios/block.html',
          link: 'components/ios/block.html',
          content: 'Block',
          complete: true,
        },
        {
          name: 'components/ios/buttons.html',
          link: 'components/ios/buttons.html',
          content: 'Buttons',
          complete: true,
        },
        {
          name: 'components/ios/checkbox.html',
          link: 'components/ios/checkbox.html',
          content: 'Controls > Checkbox',
          complete: true,
        },
        {
          name: 'components/ios/radio.html',
          link: 'components/ios/radio.html',
          content: 'Controls > Radio Button',
          complete: true,
        },
        {
          name: 'components/ios/switch.html',
          link: 'components/ios/switch.html',
          content: 'Controls > Switch',
          complete: true,
        },
        {
          name: 'components/ios/slider.html',
          link: 'components/ios/slider.html',
          content: 'Controls > Slider',
          complete: true,
        },
        {
          name: 'components/ios/gnb.html',
          link: 'components/ios/gnb.html',
          content: 'GNB',
          complete: true,
        },
        {
          name: 'components/ios/inputs.html',
          link: 'components/ios/inputs.html',
          content: 'Inputs',
          complete: true,
        },
        {
          name: 'components/ios/ime.html',
          link: 'components/ios/ime.html',
          content: 'IME',
          complete: true,
        },
        {
          name: 'components/ios/loading.html',
          link: 'components/ios/loading.html',
          content: 'Loading',
          complete: true,
        },
        {
          name: 'components/ios/pagination.html',
          link: 'components/ios/pagination.html',
          content: 'Pagination',
          complete: true,
        },
        {
          name: 'components/ios/player.html',
          link: 'components/ios/player.html',
          content: 'Player',
          complete: true,
        },
        {
          name: 'components/ios/popup.html',
          link: 'components/ios/popup.html',
          content: 'Popup',
          complete: true,
        },
        {
          name: 'components/ios/splash.html',
          link: 'components/ios/splash.html',
          content: 'Splash',
          complete: true,
        },
        {
          name: 'components/ios/tabs.html',
          link: 'components/ios/tabs.html',
          content: 'Tabs',
          complete: true,
        },
        {
          name: 'components/ios/tooltip.html',
          link: 'components/ios/tooltip.html',
          content: 'Tooltip',
          complete: true,
        },
      ],
    },
  ],
};

const dataWeb = {
  device: 'WEB',
  headData: [
    {
      content: 'Depth 1',
      width: `30%`,
    },
    {
      content: 'Depth 2',
      width: `30%`,
    },
    {
      content: '파일명',
      width: `30%`,
    },
    {
      content: '상태',
      width: `10%`,
    },
  ],
  list: [
    {
      content: 'Overview',
      children: [
        {
          name: 'overview/web/overview.html',
          link: 'overview/web/overview.html',
          content: 'Overview',
          complete: true,
        },
      ],
    },
    {
      content: 'Foundation',
      children: [
        {
          name: 'foundation/web/foundation.html',
          link: 'foundation/web/foundation.html',
          content: 'Foundation',
          complete: true,
        },
        {
          name: 'foundation/web/adot.html',
          link: 'foundation/web/adot.html',
          content: 'B tv 에이닷',
          complete: true,
        },
        {
          name: 'foundation/web/color.html',
          link: 'foundation/web/color.html',
          content: 'Color',
          complete: true,
        },
        {
          name: 'foundation/web/typography.html',
          link: 'foundation/web/typography.html',
          content: 'Typography',
          complete: true,
        },
        {
          name: 'foundation/web/iconography.html',
          link: 'foundation/web/iconography.html',
          content: 'Iconography',
          complete: true,
        },
        {
          name: 'foundation/web/layout.html',
          link: 'foundation/web/layout.html',
          content: 'Layout',
          complete: true,
        },
        {
          name: 'foundation/web/focus.html',
          link: 'foundation/web/focus.html',
          content: 'Focus',
          complete: true,
        },
        {
          name: 'foundation/web/voiceid.html',
          link: 'foundation/web/voiceid.html',
          content: 'Voice ID',
          complete: true,
        },
      ],
    },
    {
      content: 'Components',
      children: [
        {
          name: 'components/web/components.html',
          link: 'components/web/components.html',
          content: 'Components',
          complete: true,
        },
        {
          name: 'components/web/buttons.html',
          link: 'components/web/buttons.html',
          content: 'Buttons',
          complete: true,
        },
        {
          name: 'components/web/checkbox.html',
          link: 'components/web/checkbox.html',
          content: 'Controls > Checkbox',
          complete: true,
        },
        {
          name: 'components/web/radio.html',
          link: 'components/web/radio.html',
          content: 'Controls > Radio Button',
          complete: true,
        },
        {
          name: 'components/web/switch.html',
          link: 'components/web/switch.html',
          content: 'Controls > Switch',
          complete: true,
        },
        {
          name: 'components/web/dropdowns.html',
          link: 'components/web/dropdowns.html',
          content: 'Dropdowns',
          complete: true,
        },
        {
          name: 'components/web/dock.html',
          link: 'components/web/dock.html',
          content: 'Dock',
          complete: true,
        },
        {
          name: 'components/web/flag.html',
          link: 'components/web/flag.html',
          content: 'Flag',
          complete: true,
        },
        {
          name: 'components/web/gnb.html',
          link: 'components/web/gnb.html',
          content: 'GNB',
          complete: true,
        },
        {
          name: 'components/web/inputs.html',
          link: 'components/web/inputs.html',
          content: 'Inputs',
          complete: true,
        },
        {
          name: 'components/web/ime.html',
          link: 'components/web/ime.html',
          content: 'IME',
          complete: true,
        },
        {
          name: 'components/web/loading.html',
          link: 'components/web/loading.html',
          content: 'Loading',
          complete: true,
        },
        {
          name: 'components/web/menus.html',
          link: 'components/web/menus.html',
          content: 'Menus',
          complete: true,
        },
        {
          name: 'components/web/pagination.html',
          link: 'components/web/pagination.html',
          content: 'Pagination',
          complete: true,
        },
        {
          name: 'components/web/popup.html',
          link: 'components/web/popup.html',
          content: 'Popup',
          complete: true,
        },
        {
          name: 'components/web/tabs.html',
          link: 'components/web/tabs.html',
          content: 'Tabs',
          complete: true,
        },
        {
          name: 'components/web/tooltip.html',
          link: 'components/web/tooltip.html',
          content: 'Tooltip',
          complete: true,
        },
      ],
    },
  ],
};
