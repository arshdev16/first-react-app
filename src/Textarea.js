import React, {useState} from 'react';

export default function Navbar(props) {

  const [text,setText] = useState('');

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }
  const handleUpCase = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowCase = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const clearText = ()=> {
    setText("");
  }
  const handleCopy = () => {
    let newText = document.getElementById("input");
    newText.select();
    document.execCommand('copy');
  }
  const handleExtraSpaces = ()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    //const sentence = '    My string with a    lot   of Whitespace.  '.replace(/\s+/g, ' ').trim()
    setText(newText);
  }

  return(
    <>
    <div className={`text-area-${props.mode}`} >
     <div id="text-holder">
      <textarea name="input" value={text} onChange={handleOnChange} id="input" rows="11" cols="40" palceholder="enter text here"></textarea>
    </div>
     <div id="buttons">
      <button type="submit" onClick={handleUpCase} className={`btn-${props.btnMode}`}>to uppercase</button>
      <button type="submit" onClick={handleLowCase} className={`btn-${props.btnMode}`}>to lower case</button>
      <button type="submit" onClick={clearText} className={`btn-${props.btnMode}`}>clear text</button>
      <button type="submit" onClick={handleCopy} className={`btn-${props.btnMode}`}>copy to clipboard</button>
      <button type="submit" onClick={handleExtraSpaces} className={`btn-${props.btnMode}`}>remove extra spaces</button>
      <button type="submit" className={`btn-${props.btnMode}`}>example</button>
    </div>
     <div className="preview-container">
      <div className="preview-elements">
        <h2>Text summary</h2>
        <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
        <p>
        it will take{0.8 * text.split(" ").length}
      </p>
      </div>
      <div className="preview-elements">
        <h2>Preview</h2>
        <p>
          {text}
        </p>
      </div>
    </div>
    </div>
    </>
  )  
}