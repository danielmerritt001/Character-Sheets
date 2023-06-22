const Parentage = () => {
  return ( 
    <>
    <div className="family">
        <h3>family chart</h3>
        <div>family name <input type="text" /></div>
        <div>family honor <input type="text" /></div>
        <div>property owned <input type="text" /></div>
        <div>members of the family and their children</div>
        <textarea rows="7" cols="28" name="text" placeholder="Enter text"></textarea>
        <div>individual honor of pc <input type="text" /></div>
      </div>
    </>
  );
}

export default Parentage;