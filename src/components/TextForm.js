import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        if(text){
            let newText = text.toUpperCase();
            setText(newText)
            

    }else{
      
        props.showalert("enter text to see any changes","warning")
    }}

    const handleLoClick = ()=>{ 
       if(text){let newText = text.toLowerCase();
        setText(newText)
    }else{
        props.showalert("enter text to see any changes","warning")

    }
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

  
    const handleCopy = () => {
       if(text){
        
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("copied to clipboard","success")

    }else{
        props.showalert("enter text to see any changes","warning")

    }}

    const handleExtraSpaces = () => {
      if(text){  let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }else{
        props.showalert("enter text to see any changes","warning")

    }
    }
    const [text, setText] = useState(""); 
   
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
