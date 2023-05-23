const device = "Page";

const headData = [
  {
    content: "Depth 1",
    width: `22.5%`,
  },
  {
    content: "Depth 2",
    width: `22.5%`,
  },
  {
    content: "Depth 3",
    width: `22.5%`,
  },
  {
    content: "파일명",
    width: `22.5%`,
  },
  {
    content: "상태",
    width: `10%`,
  },
];

const list = [
  {
    content: "Overview",
    children: [
      {
        link: "overview/overview.html",
        name: "overview",
        complete: false,
      },
    ],
  },
  {
    content: "Principle",
    children: [
      {
        link: "principle/principle.html",
        name: "principle",
        complete: false,
      },
      {
        content: "TV Environment",
        link: "principle/tv.html",
        name: "tv",
        complete: false,
      },
      {
        content: "Contents",
        link: "principle/contents.html",
        name: "contents",
        complete: false,
      },
      {
        content: "Navigation",
        link: "principle/navigation.html",
        name: "navigation",
        complete: false,
      },
      {
        content: "Respect for Legacy",
        link: "principle/legacy.html",
        name: "legacy",
        complete: false,
      },
      {
        content: "Accessibility",
        link: "principle/accessibility.html",
        name: "accessibility",
        complete: false,
      }
    ],
  },
  {
    content: "Foundation",
    children: [
      {
        link: "foundation/foundation.html",
        name: "foundation",
        complete: false,
      },
      {
        content: "Typography",
        link: "foundation/typography.html",
        name: "typography",
        complete: false,
      },
      {
        content: "Iconography",
        link: "foundation/iconography.html",
        name: "iconography",
        complete: false,
      },
      {
        content: "Color",
        link: "foundation/color.html",
        name: "color",
        complete: false,
      },
      {
        content: "Grid",
        link: "foundation/grid.html",
        name: "grid",
        complete: false,
      },
      {
        content: "Focus",
        link: "foundation/focus.html",
        name: "focus",
        complete: false,
      },
      {
        content: "Motion",
        link: "foundation/motion.html",
        name: "motion",
        complete: false,
      },
      {
        content: "Image",
        link: "foundation/image.html",
        name: "image",
        complete: false,
      },
    ],
  },
  {
    content: "Components",
    children: [
      {
        link: "components/components.html",
        name: "components",
        complete: true,
      },
      {
        content: "Badges",
        link: "components/badges.html",
        name: "badges",
        complete: true,
      },
      {
        content: "Booting",
        link: "components/booting.html",
        name: "booting",
        complete: true,
      },
      {
        content: "Buttons",
        link: "components/buttons.html",
        name: "buttons",
        complete: true,
      },
      {
        content: "Controls",
        children: [
          {
            content: "Checkbox",
            link: "components/checkbox.html",
            name: "checkbox",
            complete: true,
          },
          {
            content: "Radio Button",
            link: "components/radio.html",
            name: "radio",
            complete: true,
          },
          {
            content: "Switch",
            link: "components/switch.html",
            name: "switch",
            complete: true,
          },
          {
            content: "Slider",
            link: "components/slider.html",
            name: "slider",
            complete: true,
          },
        ],
      },
      {
        content: "Dropdowns",
        link: "components/dropdowns.html",
        name: "dropdowns",
        complete: true,
      },
      {
        content: "GNB",
        link: "components/gnb.html",
        name: "gnb",
        complete: true,
      },
      {
        content: "Inputs",
        link: "components/inputs.html",
        name: "inputs",
        complete: true,
      },
      {
        content: "IME",
        link: "components/ime.html",
        name: "ime",
        complete: true,
      },
      {
        content: "List Cards",
        link: "components/list_cards.html",
        name: "list_cards",
        complete: true,
      },
      {
        content: "Loading",
        link: "components/loading.html",
        name: "loading",
        complete: true,
      },
      {
        content: "Pagination",
        link: "components/pagination.html",
        name: "pagination",
        complete: true,
      },
      {
        content: "Player",
        link: "components/player.html",
        name: "player",
        complete: true,
      },
      {
        content: "Popup",
        link: "components/popup.html",
        name: "popup",
        complete: true,
      },
      {
        content: "Splash",
        link: "components/splash.html",
        name: "splash",
        complete: true,
      },
      {
        content: "Tabs",
        link: "components/tabs.html",
        name: "tabs",
        complete: true,
      },
      {
        content: "Tooltip",
        link: "components/tooltip.html",
        name: "tooltip",
        complete: true,
      }
    ],
  },
];

export default { device: device, headData: headData, list: list };
