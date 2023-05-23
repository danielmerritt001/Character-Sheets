
//css
//css
import styles from "./CharStats.module.css"

const CharStats = () => {
  return (  
    <>
      <table className={`${styles.table}`}>
      <tbody >
          <tr className={`${styles.tableRow}`}>
            <td>STR</td>
            <td>DEX</td>
            <td>CON</td>
            <td>INT</td>
            <td>WIS</td>
            <td>CHA</td>
          </tr>
          <tr className={`${styles.tableRow}`}>
            <td>
              <select name="dice stats">
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
                <option value="d20">d20</option>
              </select>
              </td>
            <td>
              <select name="dice stats">
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
                <option value="d20">d20</option>
              </select>
              </td>
            <td>
              <select name="dice stats">
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
                <option value="d20">d20</option>
              </select>
              </td>
            <td>
              <select name="dice stats">
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
                <option value="d20">d20</option>
              </select>
              </td>
            <td>
              <select name="dice stats">
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
                <option value="d20">d20</option>
              </select>
              </td>
            <td>
              <select name="dice stats">
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
                <option value="d20">d20</option>
              </select>
              </td>
          </tr>
        </tbody>
      </table>
      <table className={`${styles.table}`}>
      <tbody >
          <tr className={`${styles.tableRow}`}>
            <td>Melee Weapons</td>
            <td>Ranged Weapons</td>
            <td>Magic</td>
            <td>Stealth</td>
          </tr>
          <tr className={`${styles.tableRow}`}>
            <td>
              <select name="dice stats">
                <option value="0">0</option>
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
              </select>
              </td>
            <td>
              <select name="dice stats">
                <option value="0">0</option>
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
              </select>
              </td>
            <td>
              <select name="dice stats">
              <option value="0">0</option>
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
              </select>
              </td>
            <td>
              <select name="dice stats">
                <option value="0">0</option>
                <option value="d4">d4</option>
                <option value="d6">d6</option>
                <option value="d8">d8</option>
                <option value="d10">d10</option>
                <option value="d12">d12</option>
              </select>
              </td>
            
          </tr>
        </tbody>
      </table>
      <div>
        <div>Adversity Tokens</div>
        <input type="number" />
      </div>
    </>
  );
}

export default CharStats;