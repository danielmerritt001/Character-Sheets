import BasicInfo from "../../components/FirstEdition/BasicInfo/BasicInfo"
import CharStats from "../../components/FirstEdition/CharStats/CharStats"
import SpellCard from "../../components/FirstEdition/SpellCard/SpellCard";
import IceBox from "../../components/FirstEdition/IceBox/IceBox";

const FirstEdition = () => {
  return ( 
    <>
      <h1>First Edition</h1>
      <BasicInfo />
      <h4>----------------------</h4>
      <CharStats />
      <SpellCard />
      <IceBox />
    </>
  );
}

export default FirstEdition;