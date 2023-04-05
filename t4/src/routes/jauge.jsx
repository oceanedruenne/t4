import { useState } from "react";

export default function Jauge()
{
  const [satisfaction, setSatisfaction] = useState(0);
  const [inquetude, SetInquetude]= useState(0);
  const [motivation, SetMotivation] = useState(0);
  const [comprehension, SetComprehension] = useState(0);

  function addSat(note)
  {
    if(satisfaction!=100)
    console.log(note);
    setSatisfaction(satisfaction+ note);

    return (
      <h1>{satisfaction}</h1>
    );
  }

  function subSat(note)
  {
    if(satisfaction!=0)
    console.log(note);
    setSatisfaction(satisfaction- note);

    return (
      <h1>{satisfaction}</h1>
    );
  }

  function addInq(note)
  {
    if(inquetude!=100)
    console.log(note);
    SetInquetude(inquetude+ note)
    return (
    <h1> {inquetude}</h1>);
  }

  function subInq(note)
  {
    if(inquetude!=0)
    console.log(note);
    SetInquetude(inquetude- note)
    return (
    <h1> {inquetude}</h1>);
  }

  function addmot(note)
  {
    if(motivation!=100)
    console.log(note);
    SetMotivation(motivation+ note)
    return (
      <h1> {motivation} </h1>
    );
  }

  function subMot(note)
  {
    if(motivation!=0)
    console.log(note);
    SetMotivation(motivation- note)
    return (
      <h1> {motivation} </h1>
    );

  }
    
  function addComp(note)
  {
    if(comprehension!=100)
    console.log(note);
    SetComprehension(comprehension+ note)
    return (
      <h1> {comprehension}</h1>
    );
  }

  function subComp(note)
  {
    if(comprehension!=0)
    console.log(note);
    SetComprehension(comprehension- note)
    return (
      <h1> {comprehension}</h1>
    );

  }   
    <h1> {inquetude}</h1>;
}

 