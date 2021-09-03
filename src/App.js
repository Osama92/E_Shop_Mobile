import "./styles.css";

import MobileLayout from "./Mobile";
import DesktopLayout from "./Desktop";

const screenSize = window.screen;

export default function App() {
  if (screenSize.width <= 480) {
    return <MobileLayout />;
  } else {
    return <DesktopLayout />;
  }
}
