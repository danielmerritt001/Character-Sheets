import styles from "./Weapons.module.css"

const WeaponsCard = () => {
  return (  
    <>
      <div className={`${styles.weapons}`}>
        <h3>weapons</h3>
      </div>
      <table>
        <tr>
          <th className={`${styles.name}`}>Name</th>
          <th className={`${styles.attacks}`}># of att.</th>
          <th className={`${styles.speed}`}>speed</th>
          <th className={`${styles.toHit}`}>hit adj.</th>
          <th className={`${styles.damage}`}>damage</th>
          <th className={`${styles.size}`}>Size Adj</th>
          <th className={`${styles.range}`}>range/length</th>
          <th className={`${styles.special}`}>Special</th>
        </tr>
        <tr>
          <td><input className={`${styles.name}`} type="text" /></td>
          <td><input className={`${styles.attacks}`} type="text" /></td>
          <td><input className={`${styles.speed}`} type="text" /></td>
          <td><input className={`${styles.toHit}`} type="text" /></td>
          <td><input className={`${styles.damage}`} type="text" /></td>
          <td><input className={`${styles.size}`} type="text" /></td>
          <td><input className={`${styles.range}`} type="text" /></td>
          <td><input className={`${styles.special}`} type="text" /></td>
        </tr>
      </table>
    </>
  );
}

export default WeaponsCard;