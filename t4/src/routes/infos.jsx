import { useState, useEffect, useCallback } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import chat from '../assets/images/brouillon.png'
import Jauge from '../routes/jauge';

export default function Infos()
{
    return (
        <div id="left_side" class="gradient-border">
            <div id="infos_patients">
            <img src={chat} id="photo"></img>
                <h2>Julien Charistoy</h2>
                <h3>Symptômes : Douleurs au coeur </h3>
                <h3>Couverture : </h3>
                <h3>Pensées du patient : </h3>
            </div>
            <div id="game_infos">
            <div id="jauges">
                <Jauge />
            </div>
            </div>
        </div>
    )
}