import { useState, useEffect, useCallback } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import chat from '../assets/images/chapakontan.jpg'

export default function Infos()
{
    return (
        <div id="left_side" class="gradient-border">
            <div id="infos_patients">
                <p>Julien Charistoy</p>
                <p>Symptômes : Douleurs au coeur </p>
                <p>Couverture : </p>
                <p>Pensées du patient : </p>
            </div>
            <div id="game_infos">
            <img src={chat}></img>
            <div id="jauges">
                <p>Jauge une (à remplacer par le composant jauge)</p>
                <p>Jauge deux (à remplacer par le composant jauge)</p>
                <p>Jauge trois (à remplacer par le composant jauge)</p>
                <p>Jauge quatre (à remplacer par le composant jauge)</p>
            </div>
            </div>
        </div>
    )
}