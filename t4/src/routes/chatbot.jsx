import ChatBot from "react-simple-chatbot";
import steps from '../data/steps.json';

export default function Bot()
{
    return (
        <div id="right_side">
            { <ChatBot steps={steps} /> }
        </div>
    )
}