import { Outlet } from 'react-router-dom';
import Infos from './infos'
import ChatBot from './chatbot'
import { useState } from 'react';
import person from '../data/person.json';

export default function Root() {
  const [satisfaction, _setSatisfaction] = useState(person.satisfaction);
  const [inquietude, _setInquietude]= useState(person.inquietude);
  const [motivation, _setMotivation] = useState(person.motivation);
  const [comprehension, _setComprehension] = useState(person.comprehension);

  function setSatisfaction(value)
  {
    _setSatisfaction(s => {
      value += s;
      if (value >= 0 && value <= 100) return value;
      else throw new Error("Satisfaction must be between 0 and 100");
    });
  }

  function setInquietude(value)
  {
    _setInquietude(i => {
      value += i;
      if (value >= 0 && value <= 100) return value;
      else throw new Error("Inquietude must be between 0 and 100");
    });
  }
   
  function setMotivation(value)
  {
    _setMotivation(m => {
      value += m;
      if (value >= 0 && value <= 100) return value;
      else throw new Error("Motivation must be between 0 and 100");
    });
  }

  function setComprehension(value)
  {
    _setComprehension(c => {
      value += c;
      if (value >= 0 && value <= 100) return value;
      else throw new Error("Comprehension must be between 0 and 100");
    });
  }

  return (<>
    <header>
    </header>
    <main>
      <div id="main">
        <Infos comprehension={comprehension} inquietude={inquietude}
          motivation={motivation} satisfaction={satisfaction} />
        <ChatBot />
      </div>
      <Outlet />
    </main>
    <footer>
    </footer>
  </>);
}
