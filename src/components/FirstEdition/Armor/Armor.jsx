const Armor = () => {
  return ( 
    <>
      <div className="armor">
        <h3>Armor</h3>
        <h4>Current AC</h4>
        <input type="text" />
        <div>ac adjustment with without armor</div>
        <input type="text" name="" id="" />
      <table>
        <tr>
          <th>Name of Armor</th>
          <th>Armor AC</th>
          <th>Bonuses/Penalties</th>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Name of Shield</th>
          <th>Shield AC adjustment</th>
          <th>Bonuses/ Penalties</th>
        </tr>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
        </tr>
      </table>
      </div>
    </>
  );
}

export default Armor;