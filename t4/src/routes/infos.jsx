import chat from '../assets/images/brouillon.png'
import Jauges from '../routes/jauge';
import person from '../data/person.json';

<<<<<<< HEAD
export default function Infos() {
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
                    <h3>Pensées du patient : {person.thinking}</h3>
                    <div class="container">
                        <div class="preloader">
                            <span class="black"></span>
                            <span class="black"></span>
                            <span class="black"></span>
                        </div>
                    </div>
                    <div id="game_infos">
                        <Jauge 
                            defaultComprehension={person.comprehension}
                            defaultInquietude={person.inquietude}
                            defaultMotivation={person.motivation}
                            defaultSastifaction={person.satisfaction}
                        />
                    </div>
                </div>
            </div>
}

=======
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
>>>>>>> a0a7d1fa0a4733b657203c5ea4d44705ba5a01e9
