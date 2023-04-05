import { useState } from 'react'
import '../jauge.css'

function Jauge({name, value}) {
  return (

    <span className="texte-jauge">
      <p className="param_text">{name}</p>
      <div className="progress" style={{width: "90px"}}>
        <div className="progress-value" style={{ width: value+ "%"}}> {value}%</div>
      </div>
    </span>
  );
}

export default function Jauges({defaultSastifaction, defaultInquietude, defaultMotivation, defaultComprehension})
{
  const [sastifaction, setSatisfaction] = useState(defaultSastifaction);
  const [inquietude, setInquietude]= useState(defaultInquietude);
  const [motivation, setMotivation] = useState(defaultMotivation);
  const [comprehension, setComprehension] = useState(defaultComprehension);


  function addSat(note)
  {
    if(sastifaction!=100)
    {
      setSatisfaction(sastifaction + note)
    }
  }

  function subSat(note)
  {
    if(sastifaction!=0)
    {
      setSatisfaction(sastifaction- note);
    }
  }

  function addInq(note)
  {
    if(inquietude!=100)
    {
      setInquietude(inquietude+ note);
    }
   
  }

  function subInq(note)
  {
    if(inquietude!=0) 
    {
      setInquietude(inquietude- note);
    }
  }
   
  function addMot(note)
  {
    if(motivation!=100) 
    {
      setMotivation(motivation+ note);
    }
  }

  function subMot(note)
  {
    if(motivation!=0)
    {
      setMotivation(motivation- note);
    }
  }

  function addComp(note)
  {
    if(comprehension!=100)
    {
      setComprehension(comprehension+ note);
    }
  }

  function subComp(note)
  {
    if(comprehension!=0) 
    {
      setComprehension(comprehension- note);
    }
  }
  
  return (
    <div id="jauges">
    <table>
      <tr style={{display: 'flex'}} >
        <td><Jauge name="Compréhension" value={comprehension} /></td>
        <td><Jauge name="Motivation" value={motivation} /></td>
      </tr>

      <tr style={{ display: 'flex', paddingLeft: '10px'}}>
        <td><Jauge name="Inquiétude" value={inquietude} /></td>
        <td><Jauge name="Satisfaction" value={sastifaction} /></td>
      </tr>
    </table>
    </div>
  );
}