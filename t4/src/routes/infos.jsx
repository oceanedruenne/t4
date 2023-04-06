import chat from '../assets/images/brouillon.png'
import Jauges from '../routes/jauge';
import person from '../data/person.json';

export default function Infos({comprehension, motivation, inquietude, satisfaction, thinking}) {
    return  <div id="left_side">
                <button 
                    id="rules" 
                    title="Vous êtes un médecin généraliste qui reçoit en consultation un patient, Julien Charistoy, qui se plaint de douleurs cardiaques. Votre but est de mener à bien cette consultation en faisant attention aux jauges du patient.">
                    Règles du jeu
                </button>
                
                <button id="informations" 
                title="Cardiaque = coeur | Anxiolytique = Médicament qui aide à calmer l'anxieté, le stress d'une personne | Xanax = médicament de type anxiolytique | Angine de poitrine = Douleur vive ressentie au coeur lors d'un effort ou d'une forte émotion | ECG = ÉlectroCardioGramme | Méthylphénidate : Médicament qui aide à la concentration et qui peut augmenter le nombre de battements par minute du coeur | Testostérone : Hormone masculine">Lexique</button>
                <div id="infos_patients">
                    <img src={chat} id="photo"></img>
                    <h2>{person.name}</h2>
                    <h3>Symptômes :</h3>
                    <ul>
                        {person.symptoms.map((symptom) => <li>{symptom}</li>)}
                    </ul>
                    <h3>Couverture : {person.cmu ? "oui" : "non"}</h3>
                    <h3>Pensées du patient :</h3>
                    <div class="container">
                        { thinking === null ? 
                        <div class="preloader">
                            <span class="black"></span>
                            <span class="black"></span>
                            <span class="black"></span>
                        </div> : <p>{thinking}</p> }
                    </div>
                    <div id="game_infos">
                        <Jauges comprehension={comprehension} inquietude={inquietude}
                            motivation={motivation} satisfaction={satisfaction}
                        />
                    </div>
                </div>
            </div>
}

