import { formToJSON } from "axios";
import React,{ useState } from "react";
import { divide } from "react-native-reanimated";
import { Chat } from "./chat";

export const App = () => {
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
                <button type="submit">質問する</button>
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