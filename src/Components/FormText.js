import {React, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function FormText(props) {
    
    const handleUpClick = () =>{
        console.log("Button was clicked "+text )
        // setText("Changed! dummy text from setState function")
        // note initial value will be of text as soon as we assign value to setText value will be of setText
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper-case", "success")
    }
    const handleLoClick = () =>{
        console.log("Button was clicked ")
        let LoText = text.toLowerCase();
        setText(LoText)
        props.showAlert("Converted to Lower-case", "success")
    }
  
    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value)     // can able to update the text as well, text is also changing as per setText
    }

    let originalText;
    const handleClear = ()=>{
        originalText = text.slice(0);
        setText("")    
        props.showAlert("Text Cleared", "success")
    }
    const handleUndo = () =>{
        setText(text.slice(0))
        console.log(originalText)
        props.showAlert("Handler Undo not working!!!", "success")
    }

    const handleCopy = ()=>{
        // let textE = document.querySelector(".myBox")
        // textE.select();
        // navigator.clipboard.writeText(textE.value);      
        // // it's return a PROMISE, which will be resolved when the copied text have been updated
        // document.getSelection().removeAllRanges();     // text will be copied and the selection will be removed

        navigator.clipboard.writeText(text);      // we can only do this as well
        props.showAlert("Text Copied!", "success")
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces deleted", "success")
    }
    
    // hooks
    // const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    // text = "new text"  // wrong way to change the text 
    // setText("new text")     // correct way to change the text. Need to pass in the function
   

    const [originalBtn, setBtn] = useState("UPPER-CASE");

    let bool = true;
    const toggleBtn = ()=>{
       
        if (originalBtn === "UPPER-CASE"){
            setBtn("lower-case")
            handleUpClick();
        }
        else{
            setBtn("UPPER-CASE")
            handleLoClick();
        }
    }


   
    const [orClearBtn, setUndoBtn] = useState("Clear")
  
    const toggleClearBtn = ()=>{
       
        if (orClearBtn === "Clear"){
            setUndoBtn("Undo")
            handleClear();
        }
        else{
            setUndoBtn("Clear")
            handleUndo();
        }
    }



  return (
    <div className='container'>
        <Form style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write shit here!</Form.Label>
            <Form.Control as="textarea"  className='myBox' value= {text} onChange = {handleOnChange} rows={8} style={{backgroundColor: props.mode === 'dark'?'#3f4249' : 'white', 
            color: props.mode === 'dark' ? 'white': 'black' }}/>
            </Form.Group>
            <Button disabled = {text.length === 0} variant="outline-success" onClick={toggleBtn}>{originalBtn}</Button>{' '}
            {/* <Button variant="outline-warning" onClick={handleLoClick}>Lower-case</Button>{' '} */}
            {/* <Button variant="outline-danger" onClick={handleClear}>Clear-Text </Button>{' '} */}
            <Button disabled = {text.length === 0} variant="outline-danger" onClick={toggleClearBtn}>{orClearBtn}</Button>{' '}
            <Button disabled = {text.length === 0} variant="outline-primary" onClick={handleCopy}>Copy</Button>{' '}
            <Button disabled = {text.length === 0} variant="outline-secondary" onClick={handleExtraSpace}>Organise</Button>{' '}

        </Form>

        <div className="summary" style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        {/* <p>words: {text.split(" ").filter((element)=>{return element.length != 0}).length} and character: {text.length} </p> */}
        {/* splits by a white spaces white spaces includes new line as well  */}
        <p>words: {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} and character: {text.length} </p>
        <p>{0.008*(text.split(" ").filter((element)=>{return element.length != 0}).length)}Mins read</p>
        <h2>Preview </h2>
        <p>{text.length > 0? text: "Nothing to preview"}</p>
        </div>
        
    </div>
  )
}

export default FormText