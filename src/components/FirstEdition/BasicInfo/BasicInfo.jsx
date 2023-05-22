
//css
import styles from "./BasicInfo.module.css"

const BasicInfo = () => {
  return ( 
    <>
      <div className={`${styles.vitals}`}>
        <div className={`${styles.ac}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoInput}`}>ac</div>
        </div>
        <div id='hitpoints'>
          <input type="text" name="" id="basic-info-input" />
          <div id="basic-info-prompt">hitpoints</div>
        </div>
      </div>
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
        <div className={`${styles.basicInfoRace}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>Race</div>
        </div>
        <div className={`${styles.race}`}>
          <input type="text" name="" className={`${styles.basicInfoInput}`} />
          <div className={`${styles.basicInfoPrompt}`}>gender, height, weight, age</div>
        </div>
      </div>
    </>
  );
}

export default BasicInfo;