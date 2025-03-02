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
    el(
      "section",
      el("h1", "메이트 개발자 DAO"),
      el("p", "메이트 개발자 DAO는 메이트, 이메이트, 바이어스메이트 홀더인 개발자들이 참여하는 DAO입니다.\n비영리로 운영되며 도지사운드클럽팀과는 관계가 없습니다."),
    ),
    el(
      "section",
      el(
        "ul",
        el("li", el("a", "내 Kaia NFT 보기 페이지", { href: "/my-kaia-nfts" })),
        //el("li", el("a", "Kaia NFT 마켓", { href: "/kaia-nft-marketplace" })),
        //el("li", el("a", "메이트 NFT 메신저", { href: "/mate-app" })),
      ),
    ),
  );
}
