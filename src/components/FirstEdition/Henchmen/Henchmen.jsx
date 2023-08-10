import styles from "./Henchmen.module.css"

const Henchmen = () => {
  return (  
    <>
      <div className={`${styles.henchmen}`}>
        <h3>Henchmen/ Animal Companions</h3>
        <table>
          <tr>
            <th>name</th>
            <th>race/ class</th>
            <th className={`${styles.ac}`}>ac</th>
            <th className={`${styles.hitDie}`}>HD/ lvl</th>
            <th className={`${styles.hitDie}`}># of Attack</th>
            <th className={`${styles.hp}`}>HP</th>
            <th className={`${styles.thac0}`}>THAC0/ hit bonus</th>
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
              <input className={`${styles.ac}`} type="text" />
            </td>
            <td>
              <input className={`${styles.hitDie}`} type="text" />
            </td>
            <td>
              <input className={`${styles.attacks}`} type="text" />
            </td>
            <td>
              <input className={`${styles.hp}`} type="text" />
            </td>
            <td>
              <input className={`${styles.thac0}`} type="text" />
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