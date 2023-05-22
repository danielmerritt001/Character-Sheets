
//css
import styles from "./BasicInfo.module.css"

const BasicInfo = () => {
  return ( 
    <>
      <div className=""></div>
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
        <div id='level'>
          <input type="text" name="" id="basic-info-input" />
          <div id="basic-info-prompt">level</div>
        </div>
        <div id='race'>
          <input type="text" name="" id="basic-info-input" />
          <div id="basic-info-prompt">Race</div>
        </div>
        <div id='gender'>
          <input type="text" name="" id="basic-info-input" />
          <div id="basic-info-prompt">gender, height, weight, age</div>
        </div>
        <div id='ac'>
          <input type="text" name="" id="basic-info-input" />
          <div id="basic-info-prompt">ac</div>
        </div>
        <div id='hitpoints'>
          <input type="text" name="" id="basic-info-input" />
          <div id="basic-info-prompt">hitpoints</div>
        </div>
      </div>
    </>
  );
}

export default BasicInfo;