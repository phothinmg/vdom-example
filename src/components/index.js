import { ce } from "../lib/index";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const App = ce("main", {
  children: [
    ce("h5", {
      children: [
        {
          type: "text",
          value: "Vdom Example",
        },
      ],
    }),
    Header,
    Body,
    Footer,
  ],
});

export default App;
