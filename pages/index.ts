import { createPage, el } from "@common-module/static-site-generator";

export default function index() {
  return createPage(
    {
      title: "메이트 개발자 DAO",
      description:
        "메이트 개발자 DAO는 메이트, 이메이트, 바이어스메이트 홀더인 개발자들이 참여하는 DAO입니다. 비영리로 운영되며 도지사운드클럽팀과는 관계가 없습니다.",
      jsFiles: ["/bundle.js"],
      cssFiles: ["/bundle.css"],
      twitterHandle: "@matedevdao",
    },
    el("header", el("h1", "메이트 개발자 DAO")),
    el(
      "main",
      el(
        "section",
        el(
          "p",
          "메이트 개발자 DAO는 메이트, 이메이트, 바이어스메이트 홀더인 개발자들이 참여하는 프로젝트 개발 DAO입니다.",
        ),
        el(
          "p.asterisk",
          "* 홀더들이 비영리로 자발적으로 참여하며, 도지사운드클럽팀과는 관계가 없음을 알립니다.",
        ),
      ),
      el(
        "section.services",
        el("h2", "프로젝트"),
        el(
          "ul",
          el(
            "li",
            el("img", { src: "/images/logo.png" }),
            el(
              ".info",
              el("h3", "내 Kaia NFT (개발중)"),
              el("p", "내가 소유한 Kaia NFT를 확인하고 관리합니다.\nDynamic NFT의 경우 커스텀 기능을 제공합니다."),
            ),
            el(
              "a.button.icon",
              '<svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 -960 960 960" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>',
              {
                href: "/my-kaia-nfts",
                target: "_blank",
              },
            ),
          ),
          el(
            "li",
            el("img", { src: "/images/exchange-logo.png" }),
            el(
              ".info",
              el("h3", "Kaia NFT 마켓 (개발중)"),
              el(
                "p",
                "Kaia NFT 전용 완전 온체인 마켓플레이스입니다.\n수수료가 없습니다.",
              ),
            ),
            el(
              "a.button.icon",
              '<svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 -960 960 960" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>',
              {
                href: "/kaia-nft-marketplace",
                target: "_blank",
              },
            ),
          ),
          el(
            "li",
            el("img", { src: "/images/mate-app-logo.png" }),
            el(
              ".info",
              el("h3", "메이트 NFT 메신저 (개발중)"),
              el(
                "p",
                "NFT 홀더들이 모여 거버넌스로 운영하는 메신저 서비스입니다.",
              ),
            ),
            el(
              "a.button.icon",
              '<svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 -960 960 960" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>',
              {
                href: "/mate-app",
                target: "_blank",
              },
            ),
          ),
        ),
      ),
    ),
    el(
      "footer",
      el(".credit", "Mate Dev DAO"),
      el(
        ".social",
        el(
          "a.button.icon",
          '<svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 98 96" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" /></svg>',
          {
            href: "https://github.com/matedevdao",
            target: "_blank",
          },
        ),
        el(
          "a.button.icon",
          '<svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="currentColor" d="M13.158 2.058h2.248l-4.913 5.435 5.78 7.395h-4.525l-3.545-4.485-4.056 4.485h-2.25l5.255-5.813-5.545-7.017h4.64l3.205 4.1 3.706-4.1Zm-.79 11.527h1.246L5.57 3.293H4.233l8.135 10.292Z"></path></g></svg>',
          {
            href: "https://x.com/matedevdao",
            target: "_blank",
          },
        ),
      ),
    ),
  );
}
