import "./styles.css";
import "./Desktop.js";
import MobileLayout from "./Mobile";
import DesktopLayout from "./Desktop";

const screenSize = window.screen;

console.log(screenSize);

export default function App() {
  if (screenSize.width <= 480) {
    return <MobileLayout />;
  } else {
    return <DesktopLayout />;
  }
}
