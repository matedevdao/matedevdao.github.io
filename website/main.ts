import { DomNode, Theme, ThemeManager } from "@common-module/app";
import { Button, ButtonType } from "@common-module/app-components";
import { DarkModeIcon, LightModeIcon } from "@common-module/svg-icons";

const header = new DomNode(
  document.querySelector("header") as HTMLHeadingElement,
);

header.append(
  new Button({
    type: ButtonType.Icon,
    icon: ThemeManager.getShowingTheme() === Theme.Dark
      ? new LightModeIcon()
      : new DarkModeIcon(),
    onClick: (button) => {
      ThemeManager.toggleTheme();
      button.icon = ThemeManager.getShowingTheme() === Theme.Dark
        ? new LightModeIcon()
        : new DarkModeIcon();
    },
  }),
);
