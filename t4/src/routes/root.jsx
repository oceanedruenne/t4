import { NavLink, Link, Outlet } from 'react-router-dom';
import Infos from './infos'
import ChatBot from './chatbot'
import Jauge from './jauge';

export default function Root() {
  return (<>
    <header>
    </header>
    <main>
    <div id="main">
        <Infos>
          <Jauge></Jauge>
        </Infos>
        <ChatBot></ChatBot>
      </div>
      <Outlet />
    </main>
    <footer>
    </footer>
  </>);
}
