
//css
//css
import styles from "./BasicInfo.module.css"

const BasicInfo = () => {
  return ( 
    <>
      <div className={`${styles.basicInfo}`}>
        <div className={`${styles.characterName}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>character name</div>
        </div>
        <div className={`${styles.class}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>class</div>
        </div>
        <div className={`${styles.alignment}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>alignment</div>
        </div>
        <div className={`${styles.level}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>level</div>
        </div>
        <div className={`${styles.basicInfoGender}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>Gender</div>
        </div>
        <div className={`${styles.age}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}> Age</div>
        </div>
        <div className={`${styles.fear}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>Fear</div>
        </div>
        <div className={`${styles.motivation}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>Motivation</div>
        </div>
        <div className={`${styles.description}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>Description</div>
        </div>
          <div className={`${styles.inventory}`}>
          <textarea rows="7" cols="36" name="text" placeholder="Enter text"></textarea>
          <div className={`${styles.basicInfoPrompt}`}>Inventory</div>
        </div>
        <div className={`${styles.notes}`}>
          <textarea rows="7" cols="36" name="text" placeholder="Enter text"></textarea>
          <div className={`${styles.basicInfoPrompt}`}>Notes</div>
        </div>
        
      </div>
    </>
  );
}

export default BasicInfo;