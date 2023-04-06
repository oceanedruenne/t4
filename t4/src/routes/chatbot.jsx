import ChatBot from "react-simple-chatbot";
import steps from '../data/steps.json';

export default function Bot({addSatisfaction, addInquietude, addMotivation, addComprehension})
{
    steps.map(step => {
        let trigger = step["trigger"];
        step['trigger'] = () => {
            if (step['metadata'] !== undefined) {
                const m = step['metadata'];
                if (m["comprehension"] !== undefined)
                    addComprehension(m["comprehension"]);
                if (m["motivation"] !== undefined)
                    addMotivation(m["motivation"]);
                if (m["inquietude"] !== undefined)
                    addInquietude(m["inquietude"]);
                if (m["satisfaction"] !== undefined)
                    addSatisfaction(m["satisfaction"]);
            }

            return trigger;
        }
    });

    return (
        <div id="right_side">
            { <ChatBot steps={steps} /> }
        </div>
    )
}