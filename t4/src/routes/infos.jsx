import chat from '../assets/images/brouillon.png'
import Jauge from '../routes/jauge';
import person from '../data/person.json';

function InfosPatient() {
    return <div id="infos_patients">
        <img src={chat} id="photo"></img>
        <h2>{person.name}</h2>
        <h3>Symptômes :</h3>
        <ul>
            {person.symptoms.map((symptom) => <li>{symptom}</li>)}
        </ul>
        <h3>Couverture : {person.cmu ? "oui" : "non"}</h3>
        <h3>Pensées du patient : {person.thinking}</h3>
    </div>
}

export default function Infos()
{
    return (
        <div id="left_side" class="gradient-border">
            <InfosPatient />
            <div id="game_infos">
                <Jauge defaultComprehension={person.comprehension}
                    defaultInquietude={person.inquietude}
                    defaultMotivation={person.motivation}
                    defaultSastifaction={person.satisfaction} />
            </div>
        </div>
    )
}