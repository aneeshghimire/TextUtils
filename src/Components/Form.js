import React, { useState } from 'react'

export default function Form(props) {

    const [text, setText] = useState("");
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("Speak Command Activated", "success");
    }

    const handleToUp = () => {
        var newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase", "success");
    }

    const handleToDown = () => {
        var newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("textarea");
        // text.select(); --> This selects the text. Not necessarily used when copying
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    function countWords(inputString) {

        const trimmedString = inputString.trim();
        const wordsArray = trimmedString.split(/\s+/);
        const nonEmptyWordsArray = wordsArray.filter(word => word.length > 0);
        return nonEmptyWordsArray.length;
    }


    return (
        <>
            <div>
                <h1 style={props.mode === "light" ? { color: 'black' } : { color: 'white' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} `} value={text} style={props.mode === 'dark' ? { backgroundColor: "grey", color: "white" } : {}} onChange={handleOnChange} id="textarea" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-0" onClick={handleToUp} >To Uppercase</button>
                <button className="btn btn-secondary mx-3" onClick={handleToDown} >To Lowercase</button>
                <button type="submit" onClick={handleCopy} className="btn btn-dark mx-2 my-2">Copy to Clipboard</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3>Your Summary</h3>
                {/* <p>Words count:{text.split(" ").length}</p> */}
                <p>Words count:{countWords(text)}</p>
                <p>Characters count: {text.length}</p>
            </div>
        </>
    )
}
