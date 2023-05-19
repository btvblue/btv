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
        link: "principle.html",
        name: "principle",
        complete: false,
      },
      {
        content: "명확한 구조",
        link: "structure.html",
        name: "structure",
        complete: false,
      },
      {
        content: "접근성",
        link: "accessibility.html",
        name: "accessibility",
        complete: false,
      },
      {
        content: "일관성",
        link: "consistency.html",
        name: "consistency",
        complete: false,
      },
      {
        content: "강조",
        link: "emphasis.html",
        name: "emphasis",
        complete: false,
      },
      {
        content: "TV 해상도",
        link: "tv_resolution.html",
        name: "tv_resolution",
        complete: false,
      },
      {
        content: "탐색",
        link: "search.html",
        name: "search",
        complete: false,
      },
      {
        content: "계층구조",
        link: "hierarchy.html",
        name: "hierarchy",
        complete: false,
      },
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
        content: "Icongraphy",
        link: "foundation/icongraphy.html",
        name: "icongraphy",
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
