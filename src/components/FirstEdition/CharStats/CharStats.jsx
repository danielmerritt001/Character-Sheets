const CharStats = (props) => {
  return ( 
    <div>
      Char Stats here
      <table>
        <tbody>
          <tr>
            <td>STR</td>
            <td>DEX</td>
            <td>CON</td>
            <td>INT</td>
            <td>WIS</td>
            <td>CHA</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
      <div>
        <div>
          <div>strength adjustments</div>
          <div>To Hit Adjustment</div>
          <div>Damage Adjustment</div>
          <div>Open Stuck Doors</div>
          <div>Open Locked Doors</div>
          <div>Bend Bars</div>
        </div>
        <div>
          <div>int adjustments</div>
          <div>additional languages</div>
          <div>chance to know spell</div>
          <div>min # of spells/level</div>
          <div>max # of spells/ level</div>
        </div>
        <div>
          <div>wisdom adjustment</div>
          <div>Magic attack adjustment</div>
          <div>spell bonuses for levels 1-4</div>
          <div>chance of spell failure</div>
        </div>
        <div>
          <div>dex adjustments</div>
          <div>Reaction adjustment</div>
          <div>Missile Adjustment</div>
          <div>Defensive Adjustment</div>
        </div>
        <div>
          <div>Con adjustment</div>
          <div>hit point adjustment/level</div>
          <div>system shock</div>
          <div>resurrection</div>
          <div>max # of resurrections</div>
          <div># of resurrections</div>
        </div>
        <div>
          <div>Charisma Adjustment</div>
          <div>Maximum # of Henchmen</div>
          <div>Loyalty Base</div>
          <div>Reaction Adj</div>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Paralyzation, Poison, Death Magic</td>
            <td>Petrification, Polymorph</td>
            <td>Rod, Staff, Wand</td>
            <td>Breath Weapon</td>
            <td>Spell</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CharStats;