//css
import styles from "./SpellCard.module.css"

const SpellCard = () => {
  return (  
    <main className={`${styles.spellCard}`}> 
      <div>
        <div><input type="checkbox"/> Prepared</div>
        <div>
        <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div>Spell Name</div>
        </div>
        <div>
          <input type="text" name="" className={`${styles.basicInfoInput}`} /> 
          <div>Spell Level</div>
        </div>
      </div>
      <div>
        <div>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div>Range</div>
        </div>
        <div>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div>Duration</div>
        </div>
        <div>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div>Area of Effect</div>
        </div>
      </div>
      <div>
        <div>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div>Components</div>
        </div>
        <div>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div>Casting Time</div>
        </div>
        <div>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          
          <div>Saving Throw</div>
        </div>
      </div>
      <div className={`${styles.notes}`}>
          <textarea rows="7" cols="28" name="text" placeholder="Enter text"></textarea>
          <div>Description</div>
        </div>
    </main>
  );
}
 
export default SpellCard;