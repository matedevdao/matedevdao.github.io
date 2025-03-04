import { DomNode } from "@common-module/app";
import { Button, ButtonType } from "@common-module/app-components";
import { LightModeIcon } from "@common-module/svg-icons";

const header = new DomNode(
  document.querySelector("header") as HTMLHeadingElement,
);

header.append(
  new Button({
    type: ButtonType.Icon,
    icon: new LightModeIcon(),
  }),
);
