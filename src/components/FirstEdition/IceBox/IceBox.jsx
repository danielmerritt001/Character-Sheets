const IceBox = () => {
  return ( 
    <main className="ice-box"> 
      <div className="armor">
        <h3>kind of armor/ name</h3>
        <div>ac adjustment with without armor</div>
        <div>shield?</div>
      </div>
      <div className="weapons">
        <h3>weapons</h3>
        <div>num of attacks</div>
        <div>Size</div>
        <div>speed</div>
        <div>hit adjustment</div>
        <div>damage adjustment</div>
        <div>damage</div>
        <div>range/special</div>
      </div>
      <div className="proficiencies">
        <h3>proficiency</h3>
        <div>level of proficiency/ die size/ percentage</div>
      </div>
      <div className="equipment">
        <h3>equipment</h3>
        <div>item</div>
        <div>where it's stored</div>
        <div>weight</div>
        <div>usage/ value</div>
        <div>total weight</div>
        <div>encumbrance/ encumbrance thresholds</div>
      </div>
      <div className="movement">
        <h3>movement</h3>
        <div>base rate</div>
        <div>run/ normal/ crawl/ day/ hidden/ special</div>
      </div>
      <div className="experience">
        <h3>experience</h3>
        <div>current xp</div>
        <div>xp needed</div>
        <div>bonus to xp</div>
      </div>
      <div className="special-abilities">
        <h3>Special Abilities</h3>
        <div>all thief traits</div>
        <div>individual racial traits</div>
        <div>individual other class traits</div>
        <div>blank for customization</div>
      </div>
      <div className="family">
        <h3>family chart</h3>
        <div>family name and honor</div>
        <div>property owned</div>
        <div>members of the family and their children</div>
        <div>individual honor of pc</div>
      </div>
      <div className="henchman">
        <h3>Henchmen/ Animal Companions</h3>
        <div>name</div>
        <div>race/ class</div>
        <div>ac</div>
        <div>HD/ lvl</div>
        <div># Attacks</div>
        <div>HP</div>
        <div>THAC0/ or to hit chart</div>
        <div>Damage</div>
        <div>Abilities</div>
      </div>
      <div className="psionics">
        <h3>Psionics???</h3>
      </div>
      <div className="scars">
        <h3>scars</h3>
        <div>might put this with characters</div>
      </div>
      <div className="highlights">
        <h3>Highlights</h3>
        <div>date</div>
        <div>details of event</div>
      </div>
      <div className="will">
        <h3>Last Will</h3>
        <div>I___ do hereby _______</div>
      </div>
      <div className="treasure">
        <h3>Treasure</h3>
        <div>coins</div>
        <div>gems/misc</div>
        <div>location of treasury</div>
      </div>
    </main>
  );
}

export default IceBox;