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