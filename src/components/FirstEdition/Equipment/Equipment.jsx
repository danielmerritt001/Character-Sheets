const Equipment = () => {
  return ( 
    <>
      <div className="equipment">
        <h3>Equipment on Person</h3>
        <div>total weight/ weight capacity</div>
        <input type="text" />
        <div>encumbrance/ encumbrance thresholds</div>
        <input type="text" />
      <table>
        <tr>
          <th>Item and Usage</th>
          <th>weight</th>
          <th>value</th>
        </tr>
        <tr>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
        </tr>
        <tr>
          <th>gold</th>
          <th>silver</th>
          <th>copper</th>
        </tr>
        <tr>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
        </tr>
      </table>
      <h3>Easily Accessible Equipment</h3>
      <table>
        <tr>
          <th>Item and Usage</th>
          <th>weight</th>
          <th>value</th>
          <th>stored in</th>
        </tr>
        <tr>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
        </tr>
      </table>
      <table>
        <tr>
          <th>gold</th>
          <th>silver</th>
          <th>copper</th>
          <th>stored in</th>
        </tr>
        <tr>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
        </tr>
      </table>
      <h3>Treasury Equipment</h3>
      <div>Treasury Location</div>
      <input type="text" />
      <div>Maybe Add stuff to this like Security cost or a blank box for specific shit</div>
      <table>
        <tr>
          <th>Item and Usage</th>
          <th>weight</th>
          <th>value</th>
        </tr>
        <tr>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
        </tr>
      </table>
      <table>
        <tr>
          <th>gold</th>
          <th>silver</th>
          <th>copper</th>
        </tr>
        <tr>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
          <th><input type="text" /></th>
        </tr>
      </table>
      </div>
    </>
  );
}

export default Equipment;