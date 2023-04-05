import ChatBot from "react-simple-chatbot";
import steps from '../data/steps.json';

export default function Infos()
{
    return (
        <div id="right_side" class="gradient-border">
            { <ChatBot steps={steps} /> }
        </div>
    )
}