import { useState, useEffect, useCallback } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ChatBot from "react-simple-chatbot";

export default function Infos()
{
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        fetch('/steps.json')
            .then(response => response.json())
            .then(data => setSteps(data));
    }, []);

    return (
        <div id="right_side" class="gradient-border">
            { steps.length > 0 && <ChatBot steps={steps} /> }
        </div>
    )
}