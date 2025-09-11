import { useEffect, useState } from "react"
import { Btn } from "./btn";

export function Input() {

    const [text, setText] = useState([])
    const [newtxt, setNewTxt] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/todos/1').then(response => response.json()).then(data => setText([data.todo]))
    }, [])

    function addTxt() {
        if (newtxt.trim() === "") return;
        setText([...text, newtxt])
        setNewTxt("")
    }

    return <div>
        <input type="text" value={newtxt} onChange={(e) => setNewTxt(e.target.value)}/>
        <ul>
            {text.map((t, i) => (
            <li key={i}>{t}</li>
        ))}
        </ul>
        <button onClick={addTxt}>
        <Btn GivenSvg= {<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2417 7.78369V9.49414H0.135254V7.78369H15.2417ZM8.53613 0.745117V16.79H6.71973V0.745117H8.53613Z" fill="white"/>
                        </svg>}/>
        </button>
    </div>
}