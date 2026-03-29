import React, {useState} from 'react'
export default function Textform(props) {
    const handlespace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("spaces handled","success");

    }
    const handleupperclick=()=>{
        console.log("Upper case was clicked"+ text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to upper case","success");
    }
        const handleonChange=(event)=>{
        console.log("there is a change");
        setText(event.target.value);
    }
    const handleloclick=()=>{
        console.log("Upper case was clicked"+ text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lower case","success");

    }
   { /*const handlecolorclick=()=>{
        let color1="white";
        setColor(color1);
    }
    const handlerecolorclick=()=>{
        let color1="black";
        setColor(color1);
    }*/}
    const[text, setText]=useState('');
    const[color,setColor]=useState("black")
  return (
    <>
    <div className='container'>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529',color:props.mode === 'light' ? 'black' : 'white' }}   className="form-control" value={text} onChange={handleonChange}  id="mybox" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleupperclick}>Convert to Upper case</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to Lower case</button>
{/*<button className="btn btn-primary mx-2" onClick={handlecolorclick}>changes color</button>
<button className="btn btn-primary mx-2" onClick={handlerecolorclick}>back to normal color</button>*/}
<button className="btn btn-primary mx-1 my-1" onClick={handlespace}>handle spaces</button>




</div>
<div className="container my-2">
  <h1>your text summary</h1>
  <p>{text.split(/\s/).filter((element)=>{
   return element.length!==0;
  }).length}  words {text.length} chars</p>
  <p>time taken to read = {0.008*text.split(" ").length} mins</p>
  <h2>preview</h2>
  <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.length>0?text:"enter something in textbox above to preview"}</p>
</div>
</>
  )
}