import AboutProject from "../AboutProject/AboutProject";
import Technologies from "../Technologies/Technologies";
import Promo from "../MainBanner/MainBanner";
import AboutMe from "../AboutMe/AboutMe";
import "./Main.css";

function Main() {
  return (
    <main>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Technologies></Technologies>
      <AboutMe></AboutMe>
    </main>
  );
}

export default Main;
