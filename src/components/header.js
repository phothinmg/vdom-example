import { ce } from "../lib/index";

const Header = ce("header", {
  children: [
    ce("nav", {
      attr: {
        class: ["noprint"],
      },
      children: [
        ce("ul", {
          children: [
            ce("li", {
              children: [
                {
                  type: "text",
                  value: "Vdom Example",
                },
              ],
            }), // li end
            ce("li", {
              attr: {
                class: ["float-right", "sticky"],
              },
              children: [
                {
                  type: "text",
                  value: "Right Nav",
                },
              ],
            }), // li end
          ], // ul end
        }), //
      ], // nav end
    }),
  ], // header end
});

export default Header;
