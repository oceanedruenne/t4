import chat from '../assets/images/brouillon.png'
import Jauges from '../routes/jauge';
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

export default function Infos({comprehension, motivation, inquietude, satisfaction})
{
    return (
        <div id="left_side" class="gradient-border">
            <InfosPatient />
            <div id="game_infos">
                <Jauges comprehension={comprehension}
                    inquietude={inquietude}
                    motivation={motivation}
                    satisfaction={satisfaction} />
            </div>
        </div>
    )
}