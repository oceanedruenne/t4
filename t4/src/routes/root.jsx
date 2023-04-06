import Infos from './infos'
import Bot from './chatbot'
import { useState } from 'react';
import person from '../data/person.json';

export default function Root() {
  const [satisfaction, setSatisfaction] = useState(person.satisfaction);
  const [inquietude, setInquietude]= useState(person.inquietude);
  const [motivation, setMotivation] = useState(person.motivation);
  const [comprehension, setComprehension] = useState(person.comprehension);

  function addSatisfaction(value)
  {
    setSatisfaction(s => {
      value += s;
      if (value >= 0 && value <= 100) return value;
      else throw new Error("Satisfaction must be between 0 and 100");
    });
  }

  function addInquietude(value)
  {
    setInquietude(i => {
      value += i;
      if (value >= 0 && value <= 100) return value;
      else throw new Error("Inquietude must be between 0 and 100");
    });
  }
   
  function addMotivation(value)
  {
    setMotivation(m => {
      value += m;
      if (value >= 0 && value <= 100) return value;
      else throw new Error("Motivation must be between 0 and 100");
    });
  }

  function addComprehension(value)
  {
    setComprehension(c => {
      value += c;
      if (value >= 0 && value <= 100) return value;
      else throw new Error("Comprehension must be between 0 and 100");
    });
  }

  return (<>
    <header>
    </header>
    <main id="main">
        <Infos comprehension={comprehension} satisfaction={satisfaction}
          motivation={motivation} inquietude={inquietude}/>
        <Bot addComprehension={addComprehension} addSatisfaction={addSatisfaction}
          addMotivation={addMotivation} addInquietude={addInquietude} />
    </main>
    <footer>
    </footer>
  </>);
}
