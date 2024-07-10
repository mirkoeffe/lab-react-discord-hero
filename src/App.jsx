import "./App.css";
import Logo from "../src/assets/discord-logo-white.png";
import MenuLogo from "../src/assets/menu-icon.png";
import BgImage from "../src/assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img src={Logo} alt="discord logo" className="logo" />
        <img src={MenuLogo} alt="menu icon" className="menuLogo" />
      </div>
      <div className="Section">
        <h1 className="Header">IMAGINE A PLACE...</h1>
        <p className="Paragraph">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button className="DownloadButton">Download for Mac</button>
        <button className="BrowserApp">Open Discord on your browser</button>
      </div>
      <div className="bgImage">
        <img src={BgImage} alt="Background Image" />
      </div>
    </div>
  );
}

export default App;
