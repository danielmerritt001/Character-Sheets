const WeaponsCard = () => {
  return (  
    <>
      <div className="weapons">
        <h3>weapons</h3>
      </div>
      <table>
        <tr>
          <th>num of attacks</th>
          <th>Size</th>
          <th>speed</th>
          <th>hit adjustment</th>
          <th>damage adjustment</th>
          <th>damage</th>
          <th>range/special</th>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
      </table>
    </>
  );
}

export default WeaponsCard;