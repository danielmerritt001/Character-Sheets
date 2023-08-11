import styles from "./ThiefSkills.module.css"

const ThiefSkills = () => {
  return ( 
    <>
    <h3>Thief Skills</h3>
    <table>
      <tr>
        <td></td>
        <th className={`${styles.pocket}`}>Pick Pockets</th>
        <th className={`${styles.lock}`}>Open Locks</th>
        <th className={`${styles.trap}`}>Find/ Rem Traps</th>
        <th className={`${styles.silent}`}>Move Silently</th>
        <th className={`${styles.shadow}`}>Hide in Shadows</th>
        <th className={`${styles.hear}`}>Hear Noise</th>
        <th className={`${styles.climb}`}>Climb Walls</th>
        <th className={`${styles.read}`}>Read Languages</th>
      </tr>
      <tr>
        <th>Base</th>
        <td><input className={`${styles.pocket}`} type="text" /></td>
        <td><input className={`${styles.lock}`} type="text" /></td>
        <td><input className={`${styles.trap}`} type="text" /></td>
        <td><input className={`${styles.silent}`} type="text" /></td>
        <td><input className={`${styles.shadow}`} type="text" /></td>
        <td><input className={`${styles.hear}`} type="text" /></td>
        <td><input className={`${styles.climb}`} type="text" /></td>
        <td><input className={`${styles.read}`} type="text" /></td>
      </tr>
      <tr>
        <th>Dex Adj</th>
        <td><input className={`${styles.pocket}`} type="text" /></td>
        <td><input className={`${styles.lock}`} type="text" /></td>
        <td><input className={`${styles.trap}`} type="text" /></td>
        <td><input className={`${styles.silent}`} type="text" /></td>
        <td><input className={`${styles.shadow}`} type="text" /></td>
        <td><input className={`${styles.hear}`} type="text" /></td>
        <td><input className={`${styles.climb}`} type="text" /></td>
        <td><input className={`${styles.read}`} type="text" /></td>
      </tr>
      <tr>
        <th>Total</th>
        <td><input className={`${styles.pocket}`} type="text" /></td>
        <td><input className={`${styles.lock}`} type="text" /></td>
        <td><input className={`${styles.trap}`} type="text" /></td>
        <td><input className={`${styles.silent}`} type="text" /></td>
        <td><input className={`${styles.shadow}`} type="text" /></td>
        <td><input className={`${styles.hear}`} type="text" /></td>
        <td><input className={`${styles.climb}`} type="text" /></td>
        <td><input className={`${styles.read}`} type="text" /></td>
      </tr>
    </table>
    </>
  );
}

export default ThiefSkills;