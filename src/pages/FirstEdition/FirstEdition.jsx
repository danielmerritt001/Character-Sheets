import BasicInfo from "../../components/FirstEdition/BasicInfo/BasicInfo"
import CharStats from "../../components/FirstEdition/CharStats/CharStats"
import SpellCard from "../../components/FirstEdition/SpellCard/SpellCard";
import Henchmen from "../../components/FirstEdition/Henchmen/Henchmen";
import IceBox from "../../components/FirstEdition/IceBox/IceBox";
import WeaponsCard from "../../components/FirstEdition/WeaponsCard/WeaponsCard";
import Armor from "../../components/FirstEdition/Armor/Armor";
import Proficiencies from "../../components/FirstEdition/Proficiencies/Proficiencies";
import Equipment from "../../components/FirstEdition/Equipment/Equipment";
import Movement from "../../components/FirstEdition/Movement/Movement";
import Experience from "../../components/FirstEdition/Experience/Experience";
import ThiefSkills from "../../components/ThiefSkills/ThiefSkills";
import Parentage from "../../components/FirstEdition/Parentage/Parentage";
import Highlights from "../../components/FirstEdition/Highlights/Highlights";

const FirstEdition = () => {
  return ( 
    <>
      <h1>First Edition</h1>
      <BasicInfo />
      <h4>----------------------</h4>
      <CharStats />
      <SpellCard />
      <Henchmen />
      <WeaponsCard />
      <Armor />
      <Proficiencies />
      <Equipment />
      <Movement />
      <Experience />
      <ThiefSkills />
      <Parentage />
      <Highlights />
      <IceBox />
    </>
  );
}

export default FirstEdition;