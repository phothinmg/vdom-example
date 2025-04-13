import { ce } from "../lib/index";

const Footer = ce("footer", {
  children: [
    ce("hr", {}),
    ce("h5", {
      children: [
        {
          type: "text",
          value: "Vdom",
        },
      ],
    }),
    ce("p", {
      children: [
        {
          type: "text",
          value: "Code on",
        },
        ce("a", {
          attr: {
            href: "https://github.com/phothinmg/vdom-example",
          },
          children: [
            {
              type: "text",
              value: "\tGitHub",
            },
          ],
        }),
        ce("br", {}),
        ce("a", {
          attr: {
            href: "mailto:john.doe@foo.bar",
          },
          children: [
            {
              type: "text",
              value: "john.doe@foo.bar",
            },
          ],
        }),
        ce("br", {}),
        ce("a", {
          attr: {
            href: "tel:+1234567890",
          },
          children: [
            {
              type: "text",
              value: "+1234567890",
            },
          ],
        }),
      ],
    }),
  ],
});

export default Footer;
