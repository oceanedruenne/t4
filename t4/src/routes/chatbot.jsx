import { useState, useEffect, useCallback } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ChatBot from "react-simple-chatbot";

export default function Infos()
{

    const steps = [
        {
            id:"bjr",
            message:"Bonjour Docteur !",
            trigger:"first_issues"
        },
        {
            id:"first_issues",
            options: 
            [
                {
                    value: "Bonjour ! Que puis-je faire pour vous ?", 
                    label:"Bonjour ! Que puis-je faire pour vous ?",
                    trigger:"answer1_1"
                },
                {
                    value:"Bon qu'est ce qu'il y a encore ! Je vous ai vu il y a 3 jours déjà",
                    label:"Bon qu'est ce qu'il y a encore ! Je vous ai vu il y a 3 jours déjà",
                    trigger:"answer1_2"
                },
                {
                    value:"Bonjour ! Que se passe-t-il Monsieur Charistoy ?",
                    label:"Bonjour ! Que se passe-t-il Monsieur Charistoy ?",
                    trigger:"answer1_3"
                },
                {
                    value:"Bonjour ! Alors dites moi tout !",
                    label:"Bonjour ! Alors dites moi tout !",
                    trigger:"answer1_4"
                },

            ],

        },
        {
            id:"answer1_1",
            message:" J'ai mal au coeur",
            trigger:"second_issues"
        },
        {
            id:"answer1_2",
            message:"J'ai peur de faire une crise cardiaque et de mourir, j'ai des crises ou j'ai mal au coeur ",
            trigger:"second_issues"
        },
        {
            id:"answer1_3",
            message:"J'ai des douleurs au niveau du thorax ",
            trigger:"second_issues"
        },
        {
            id:"answer1_4",
            message:"J'ai mal au coeur depuis quelques temps",
            trigger:"second_issues"
        },

        {
            id:"second_issues",
            options: 
            [
                {
                    value: "Ça dure depuis longtemps votre truc ?", 
                    label:"Ça dure depuis longtemps votre truc ?",
                    trigger:"answer2_1"
                },
                {
                    value:"Vous avez ça depuis quand ?",
                    label:"Vous avez ça depuis quand ?",
                    trigger:"answer2_2"
                },
                {
                    value:"Vous avez cette douleur depuis combien de temps ?",
                    label:"Vous avez cette douleur depuis combien de temps ?",
                    trigger:"answer2_3"
                },
                {
                    value:"Est ce que cela vous fait mal depuis longtemps ?",
                    label:"Est ce que cela vous fait mal depuis longtemps ?",
                    trigger:"answer2_4"
                },
            ],
        },
        {
            id:"answer2_1",
            message:"Ça fait des années je dirais",
            trigger:"third_issues"
        },
        {
            id:"answer2_2",
            message:"Je ne sais pas trop, ça vient, ça part",
            trigger:"third_issues"
        },
        {
            id:"answer2_3",
            message:"Quelques jours, c'est assez récent",
            trigger:"third_issues"
        },
        {
            id:"answer2_4",
            message:"Quelques semaines",
            trigger:"third_issues"
        },

        {
            id:"third_issues",
            options: 
            [
                {
                    value: "Y'a des cardiaques dans votre famille aussi ?", 
                    label:"Y'a des cardiaques dans votre famille aussi ?",
                    trigger:"answer3_1"
                },
                {
                    value:"Vous êtes le premier à avoir ça dans votre famille ? ",
                    label:"Vous êtes le premier à avoir ça dans votre famille ? ",
                    trigger:"answer3_2"
                },
                {
                    value:"Est ce que vous savez s'il y a des membres de votre famille qui ont eu des maladies cardiaques ? Angine de poitrine, crise cardiaque.. ? ",
                    label:"Est ce que vous savez s'il y a des membres de votre famille qui ont eu des maladies cardiaques ? Angine de poitrine, crise cardiaque.. ? ",
                    trigger:"answer3_3"
                },
                {
                    value:"Vos parents ont eu ça aussi ou pas ? ",
                    label:"Vos parents ont eu ça aussi ou pas ? ",
                    trigger:"answer3_4"
                },
            ],
        },

        {
            id:"answer3_1",
            message:"Pas à ma connaissance",
            trigger:"fourth_issues"
        },
        {
            id:"answer3_2",
            message:"Non, mais j'ai des membres de ma famille qui souffrent d'hypertension",
            trigger:"fourth_issues"
        },
        {
            id:"answer3_3",
            message:"Oui, ma mère a fait un arrêt cardiaque et a eu une opération à coeur ouvert il y a une vingtaine d'années.",
            trigger:"fourth_issues"
        },
        {
            id:"answer3_4",
            message:"Non, mais il y a eu plusieurs cas d'angine de poitrine dans ma famille.",
            trigger:"fourth_issues"
        },

        {
            id:"fourth_issues",
            options: 
            [
                {
                    value: "Y'a des trucs qui vous aident ou pas ?", 
                    label:"Y'a des trucs qui vous aident ou pas ?",
                    trigger:"answer4_1"
                },
                {
                    value:"Est ce que vous réussissez à vous calmer ?",
                    label:"Est ce que vous réussissez à vous calmer ?",
                    trigger:"answer4_2"
                },
                {
                    value:"Est ce que vous avez remarqué des choses qui font que la douleur s'atténue ou pas du tout ?",
                    label:"Est ce que vous avez remarqué des choses qui font que la douleur s'atténue ou pas du tout ?",
                    trigger:"answer4_3"
                },
                {
                    value:"Est ce que le fait de s'asseoir, de boire de l'eau, de vous pencher en avant diminue vos douleurs ?",
                    label:"Est ce que le fait de s'asseoir, de boire de l'eau, de vous pencher en avant diminue vos douleurs ?",
                    trigger:"answer4_4"
                },
            ],
        },
        {
            id:"answer4_1",
            message:"Rien",
            trigger:"fifth_issues"
        },
        {
            id:"answer4_2",
            message:"Marcher tranquillement, me vider la tête, prendre un bain ça m'aide à me calmer",
            trigger:"fifth_issues"
        },
        {
            id:"answer4_3",
            message:"Quand je prends un Xanax ça va mieux après",
            trigger:"fifth_issues"
        },
        {
            id:"answer4_4",
            message:"Le fait de m'asseoir, de boire de l'eau, de me mettre au repos ça me calme",
            trigger:"fifth_issues"
        },

        {
            id:"fifth_issues",
            options: 
            [
                {
                    value: "Et ça vient tout seul ou vous faites quelque chose ?", 
                    label:"Et ça vient tout seul ou vous faites quelque chose ?",
                    trigger:"answer5_1"
                },
                {
                    value:"Vous savez pourquoi ça vient ? ",
                    label:"Vous savez pourquoi ça vient ? ",
                    trigger:"answer5_2"
                },
                {
                    value:"Est ce que vous avez remarqué des éléments déclencheurs de votre douleur, que ce soit l'horaire, le stress, la fatigue etc ?",
                    label:"Est ce que vous avez remarqué des éléments déclencheurs de votre douleur, que ce soit l'horaire, le stress, la fatigue etc ?",
                    trigger:"answer5_3"
                },
                {
                    value:"C'est vos enfants qui vous mettent dans cet état là ?",
                    label:"C'est vos enfants qui vous mettent dans cet état là ?",
                    trigger:"answer5_4"
                },
            ],
        },
        {
            id:"answer5_1",
            message:"Ça vient surtout pendant mes séances de sport",
            trigger:"sixth_issues"
        },
        {
            id:"answer5_2",
            message:"Je n'en ai aucune idée",
            trigger:"sixth_issues"
        },
        {
            id:"answer5_3",
            message:"Ça vient surtout le soir avant de dormir, et particulièrement le dimanche soir",
            trigger:"sixth_issues"
        },
        {
            id:"answer5_4",
            message:"Non c'est aléatoire",
            trigger:"sixth_issues"
        },

        {
            id:"sixth_issues",
            options: 
            [
                {
                    value: "Vous avez mal comment ?", 
                    label:"Vous avez mal comment ?",
                    trigger:"answer6_1"
                },
                {
                    value:"C'est quoi vos douleurs ?",
                    label:"C'est quoi vos douleurs ?",
                    trigger:"answer6_2"
                },
                {
                    value:"Est ce que c'est une douleur vive, comme un coup de couteau, ou est ce que c'est une douleur qui vous serre au niveau du coeur ? Est ce que vous avez des douleurs dans les bras, la mâchoire ?",
                    label:"Est ce que c'est une douleur vive, comme un coup de couteau, ou est ce que c'est une douleur qui vous serre au niveau du coeur ? Est ce que vous avez des douleurs dans les bras, la mâchoire ?",
                    trigger:"answer6_3"
                },
                {
                    value:"Vous avez quoi en plus d'avoir mal au coeur ?",
                    label:"Vous avez quoi en plus d'avoir mal au coeur ? ",
                    trigger:"answer6_4"
                },
            ],
        },
        {
            id:"answer6_1",
            message:"Comme si on tapait sur mon coeur",
            trigger:"seventh_issues"
        },
        {
            id:"answer6_2",
            message:"Je suis essouflé et j'ai la tête qui tourne",
            trigger:"seventh_issues"
        },
        {
            id:"answer6_3",
            message:"J'ai mal aux bras, aux dents, à la mâchoire et ça me sert au niveau du coeur, et j'ai des nausées",
            trigger:"seventh_issues"
        },
        {
            id:"answer6_4",
            message:"J'ai le coeur qui bat très vite et je suis obligé de m'asseoir sinon je m'évanouis",
            trigger:"seventh_issues"
        },

        {
            id:"seventh_issues",
            options: 
            [
                {
                    value: "Est ce que vous vivez correctement ? Parce que si vous fumez, buvez et êtes angoissé ça vaut pas la peine d'aller plus loin, faut vous remettre en question ", 
                    label:"Est ce que vous vivez correctement ? Parce que si vous fumez, buvez et êtes angoissé ça vaut pas la peine d'aller plus loin, faut vous remettre en question ",
                    trigger:"answer7_1"
                },
                {
                    value:"Est ce que vous êtes un fétard ? Alcool, cigarettes...",
                    label:"Est ce que vous êtes un fétard ? Alcool, cigarettes...",
                    trigger:"answer7_2"
                },
                {
                    value:"Est ce que vous êtes dans un contexte particulièrement stressant en ce moment ? Est ce que vous fumez ?",
                    label:"Est ce que vous êtes dans un contexte particulièrement stressant en ce moment ? Est ce que vous fumez ?",
                    trigger:"answer7_3"
                },
                {
                    value:"Est ce que vous avez fait un changement dans vos habitudes de vie, que ce soit la nourriture, le sport, le café, le tabac ?",
                    label:"Est ce que vous avez fait un changement dans vos habitudes de vie, que ce soit la nourriture, le sport, le café, le tabac ?",
                    trigger:"answer7_4"
                },
            ],
        },
        {
            id:"answer7_1",
            message:"Oui je fume 2 paquets de cigarettes par jour et j'aime bien boire une bière à chaque repas",
            trigger:"eighth_issues"
        },
        {
            id:"answer7_2",
            message:"Je ne fume pas, je ne bois pas.",
            trigger:"eighth_issues"
        },
        {
            id:"answer7_3",
            message:"Je suis pas mal angoissé en ce moment, je suis anxieux",
            trigger:"eighth_issues"
        },
        {
            id:"answer7_4",
            message:"Pas spécialement, mais j'ai toujours fait beaucoup de sport, beaucoup de cardio",
            trigger:"eighth_issues"
        },
        {
            id:"eighth_issues",
            options: 
            [
                {
                    value: "Vous prenez quoi comme cachets ?", 
                    label:"Vous prenez quoi comme cachets ?",
                    trigger:"answer8_1"
                },
                {
                    value:"Est ce que vous avez pris des médicaments ces derniers temps ?",
                    label:"Est ce que vous avez pris des médicaments ces derniers temps ?",
                    trigger:"answer8_2"
                },
                {
                    value:" Avez-vous commencé un nouveau traitement, comme des antidépresseurs, des anxiolytiques, ou un traitement à base de méthylphénidate ?",
                    label:" Avez-vous commencé un nouveau traitement, comme des antidépresseurs, des anxiolytiques, ou un traitement à base de méthylphénidate ?",
                    trigger:"answer8_3"
                },
                {
                    value:"Vous pouvez me lister les traitements que vous prenez quotidiennement si vous en avez s'il vous plaît ?",
                    label:"Vous pouvez me lister les traitements que vous prenez quotidiennement si vous en avez s'il vous plaît ?",
                    trigger:"answer8_4"
                },
            ],
        },

        {
            id:"answer8_1",
            message:"Je ne prends rien.",
            trigger:"nineth_issues"
        },
        {
            id:"answer8_2",
            message:"J'ai pris beaucoup d'ibuprofène en ce moment car j'ai une tendinite au mollet.",
            trigger:"nineth_issues"
        },
        {
            id:"answer8_3",
            message:"Oui, j'ai commencé à prendre de la testostérone pour préparer une compétition de musculation",
            trigger:"nineth_issues"
        },
        {
            id:"answer8_4",
            message:"Non je n'ai rien commencé mais quand j'y pense, je bois beaucoup de café en ce moment",
            trigger:"nineth_issues"
        },

        {
            id:"nineth_issues",
            options: 
            [
                {
                    value: "Bon déshabillez vous et allez sur la table, je vais écouter votre coeur.", 
                    label:"Bon déshabillez vous et allez sur la table, je vais écouter votre coeur.",
                    trigger:"answer9_1"
                },
                {
                    value:"Je pense que ça vaut la peine d'écouter votre coeur.",
                    label:"Je pense que ça vaut la peine d'écouter votre coeur.",
                    trigger:"answer9_2"
                },
                {
                    value:"Est ce que je peux écouter votre coeur s'il vous plaît ? Pas besoin d'enlever le haut, je vais juste passer le pavillon sous votre pull.",
                    label:"Est ce que je peux écouter votre coeur s'il vous plaît ? Pas besoin d'enlever le haut, je vais juste passer le pavillon sous votre pull.",
                    trigger:"answer9_3"
                },
                {
                    value:"Bon c'est pas nécessaire d'écouter votre coeur",
                    label:"Bon c'est pas nécessaire d'écouter votre coeur",
                    trigger:"answer9_4"
                },
            ],
        },

        {
            id:"answer9_1",
            message:"Non je ne préfère pas, ça me fait peur.",
            trigger:"tenth_issues"
        },
        {
            id:"answer9_2",
            message:"Est ce que je suis obligé d'enlever le haut ?",
            trigger:"tenth_issues"
        },
        {
            id:"answer9_3",
            message:" Oui bien sûr !",
            trigger:"tenth_issues"
        },
        {
            id:"answer9_4",
            message:"Ok.",
            trigger:"tenth_issues"
        },

        {
            id:"tenth_issues",
            options: 
            [
                {
                    value: "Ben moi je sais ce que vous avez : des mauvaises habitudes de vie haha ! Faut pas continuer comme ça sinon dans 5 ans vous êtes dans votre cerceuil hein !", 
                    label:"Ben moi je sais ce que vous avez : des mauvaises habitudes de vie haha ! Faut pas continuer comme ça sinon dans 5 ans vous êtes dans votre cerceuil hein !",
                    trigger:"answer10_1"
                },
                {
                    value:"Bah ça doit être à cause du stress, je vais vous prescrire des anxiolytiques et vous donner un arrêt de travail, ça va passer, ça ira.",
                    label:"Bah ça doit être à cause du stress, je vais vous prescrire des anxiolytiques et vous donner un arrêt de travail, ça va passer, ça ira.",
                    trigger:"answer10_2"
                },
                {
                    value:"Votre coeur bat très bien, le rythme est régulier et normal. Vous n'avez pas de traitements qui peuvent donner comme effets secondaires des douleurs cardiaques. Vous avez une vie plutôt saine. Je vais vous orienter vers un cardiologue qui pourra effectuer des examens complémentaires comme une échographie ou un ECG. En tout cas, votre coeur bat très bien donc c'est rassurant.",
                    label:"Votre coeur bat très bien, le rythme est régulier et normal. Vous n'avez pas de traitements qui peuvent donner comme effets secondaires des douleurs cardiaques. Vous avez une vie plutôt saine. Je vais vous orienter vers un cardiologue qui pourra effectuer des examens complémentaires comme une échographie ou un ECG. En tout cas, votre coeur bat très bien donc c'est rassurant.",
                    trigger:"answer10_3"
                },
                {
                    value:"Bon, dans le doute, on va faire une prise de sang, on sait jamais.",
                    label:"Bon, dans le doute, on va faire une prise de sang, on sait jamais.",
                    trigger:"answer10_4"
                },
            ],
        },

        {
            id:"answer10_1",
            message:"Je pense que je sais très bien que mes habitudes de vie sont mauvaises, mais j'aimerai tout de même faire des examens complémentaires.",
            end:true
        },
        {
            id:"answer10_2",
            message:"Je n'ai pas envie de commencer un traitement d'anxiolytiques : je sais que c'est compliqué après pour les arrêter.",
            end:true
        },
        {
            id:"answer10_3",
            message:"D'accord, merci beaucoup, ça me rassure un petit peu.",
            end:true
        },
        {
            id:"answer10_4",
            message:"Mais on verra quoi dans la prise de sang ?",
            end:true
        },


    ];
    return (
        <div id="right_side" class="gradient-border">
            <ChatBot steps={steps} />
        </div>
    )
}