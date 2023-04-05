import { useState } from 'react'

export default function Jauge({defaultSastifaction, defaultInquietude, defaultMotivation, defaultComprehension})
{
  const [sastifaction, setSatisfaction] = useState(defaultSastifaction);
  const [inquietude, setInquietude]= useState(defaultInquietude);
  const [motivation, SetMotivation] = useState(defaultMotivation);
  const [comprehension, setComprehension] = useState(defaultComprehension);


  function addSat(note)
  {
    if(sastifaction!=100)
    {
      console.log(note);
      setSatisfaction(sastifaction+ note)
    }
  }

  function subSat(note)
  {
    if(sastifaction!=0)
    {
      console.log(note);
      setSatisfaction(sastifaction- note);
    }
  }

  function addInq(note)
  {
    if(inquietude!=100)
    {
      console.log(note);
      setInquietude(inquietude+ note);
    }
   
  }

  function subInq(note)
  {
    if(inquietude!=0) 
    {
      console.log(note);
      setInquietude(inquietude- note);
    }
  }
   
  function addMot(note)
  {
    if(motivation!=100) 
    {
      console.log(note);
      SetMotivation(motivation+ note);
    }
  }

  function subMot(note)
  {
    if(motivation!=0)
    {
      console.log(note);
      SetMotivation(motivation- note);
    }
  }

  function addComp(note)
  {
    if(comprehension!=100)
    {
      console.log(note);
      setComprehension(comprehension+ note);
    }
  }

  function subComp(note)
  {
    if(comprehension!=0) 
    {
      console.log(note);
      setComprehension(comprehension- note);
    }
  }
  
  return (
    <div id="jauges">
    <table style={{width:"100%"}}>
        <tr  style={{display: 'flex'}} >
      <td> 
        <span className="texte-jauge"> 
          <p className="param_text">Compréhension</p>
          <div className="progress"style={{width:'90%'}} >
            <div className="progress-value" style={{ width: comprehension+ "%"}}> {comprehension}%</div>
          </div>
      </span>   
      </td>

      <td> 
        <span className="texte-jauge"> 
          <p className="param_text"> Motivation</p>
          <div className="progress"style={{width:'120%'}} >
            <div className="progress-value" style={{ width: motivation+ "%"}}> {motivation}%</div>
          </div>
        </span>
      </td>
    </tr>

    <tr style={{ display: 'flex', paddingLeft:'5px'}}>
      <td style={{paddingLeft:'10px'}}> 
        <span className='texte-jauge'> 
          <p className='param_text'> inquietude</p>
          <div className='progress' style={{width:'130%'}} >
            <div className='progress-value' style={{ width: inquietude+ "%"}}> {inquietude}%</div>
          </div>
        </span>
      </td>

      <td style={{paddingLeft:'15px'}}> 
        <span className='texte-jauge'> 
          <p className='param_text'> Satisfaction</p>
          <div className='progress'style={{width:'100%'}}>
            <div className='progress-value' style={{ width: sastifaction+ "%"}}> {sastifaction}%</div>
        </div>
        </span>  
      </td>
    </tr>
    </table>
    </div>
  );
}