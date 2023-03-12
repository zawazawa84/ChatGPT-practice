import React,{ useState } from "react";
import { Chat } from "./chat";
import './App.css'

const App = () => {
    const [message, setMessasge] = useState('');
    const [answer, setAnswer] = useState('');

    const handleMessageChange = (event) => {
        setMessasge(event.target.value);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const responseText = await Chat(message);
        setAnswer(responseText);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows='5'
                    cols='50'
                    value={message}
                    onChange={handleMessageChange}
                />
                <button type="submit">質問する!</button>
            </form>
            { answer && (
                <>
                    <h2>回答：</h2>
                    <p>{answer}</p>
                </>
            )}
        </div>
    )
}

export default App;