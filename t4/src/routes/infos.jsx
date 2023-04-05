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
        <div id="left_side">
            <div id="infos_patients">
            <img src={chat} id="photo"></img>
                <h2>Julien Charistoy</h2>
                <h3>Symptômes : Douleurs au coeur </h3>
                <h3>Couverture : </h3>
                <h3>Pensées du patient : </h3>
                <div class="container">
                    <div class="preloader">
                        <span class="black"></span>
                        <span class="black"></span>
                        <span class="black"></span>
                    </div>
                </div>
            </div>
            <div id="game_infos">
                <Jauges comprehension={comprehension}
                    inquietude={inquietude}
                    motivation={motivation}
                    satisfaction={satisfaction} />
            </div>
        </div>
    )
}