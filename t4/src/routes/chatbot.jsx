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
            end:true
        },
        {
            id:"answer1_2",
            message:"J'ai peur de faire une crise cardiaque et de mourir, j'ai des crises ou j'ai mal au coeur ",
            end:true
        },
        {
            id:"answer1_3",
            message:"J'ai des douleurs au niveau du thorax ",
            end:true
        },
        {
            id:"answer1_4",
            message:"J'ai mal au coeur depuis quelques temps",
            end:true
        }
    ];
    return (
        <div id="right_side" class="gradient-border">
            <ChatBot steps={steps} />
           <p>Chat bot à faire</p>
        </div>
    )
}