import ChatBot from "react-simple-chatbot";
import steps from '../data/steps.json';

export default function Bot({addSatisfaction, addInquietude, addMotivation, addComprehension, satisfactionInRange, inquietudeInRange, motivationInRange, comprehensionInRange})
{
    steps.map(step => {
        let trigger = step["trigger"];
        step['trigger'] = () => {
            if (step['metadata'] !== undefined) {
                let m = step['metadata'];

                if (m["conditional"] !== undefined) {
                    const c = m['conditional'];
                    console.log(c);

                    const motivation = c['motivation'] === undefined || motivationInRange(c['motivation']);
                    const inquietude = c['inquietude'] === undefined || inquietudeInRange(c['inquietude']);
                    const satisfaction = c['satisfaction'] === undefined || satisfactionInRange(c['satisfaction']);
                    const comprehension = c['comprehension'] === undefined || comprehensionInRange(c['comprehension']);

                    m = motivation && inquietude && satisfaction && comprehension ?
                        c['metadata_true'] : c['metadata_false'];
                }

                console.log(m);

                if (m["comprehension"] !== undefined)
                    addComprehension(m["comprehension"]);
                if (m["motivation"] !== undefined)
                    addMotivation(m["motivation"]);
                if (m["inquietude"] !== undefined)
                    addInquietude(m["inquietude"]);
                if (m["satisfaction"] !== undefined)
                    addSatisfaction(m["satisfaction"]);
                if (m["thinking"] !== undefined)
                    console.log(m["thinking"]);
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