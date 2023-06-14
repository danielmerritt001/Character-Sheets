
const Henchmen = () => {
  return (  
    <>
      <div className="henchman">
        <h3>Henchmen/ Animal Companions</h3>
        <table>
          <tr>
            <th>name</th>
            <th>race/ class</th>
            <th>ac</th>
            <th>HD/ lvl</th>
            <th># Attacks</th>
            <th>HP</th>
            <th>THAC0/ or to hit chart</th>
            <th>Damage</th>
            <th>Abilities</th>
          </tr>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
            
          </tr>
        </table>
      </div>
    </>
  );
}

export default Henchmen;