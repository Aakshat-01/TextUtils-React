import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked :" + text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }

  const handleLoClick = () => {
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
  }

  const handleReverseClick = () => {
    let newText= text.split('');
    let reverse= newText.reverse();
    setText(reverse.join(''))
    props.showAlert("Text is reversed","success");
  }

  const handleClearClick = () => {
    let newText='';
    setText(newText);
    props.showAlert("Text is cleared","success");
  }

  const handleExtraSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Extra spaces has been removed","success");
  }
  
  const handleCopy = () => {
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  

  const [text,setText]= useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#03111c'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#0d273c':'white',color:props.mode==='dark'?'white':'#0d273c'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse the Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy the Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'#03111c'}}>
      <h2>Your text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length } minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
