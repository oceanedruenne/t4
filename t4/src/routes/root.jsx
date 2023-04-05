import { NavLink, Link, Outlet } from 'react-router-dom';
import Infos from './infos'
import ChatBot from './chatbot'

export default function Root() {
  return (<>
    <header>
    </header>
    <main>
    <div id="main">
        <Infos></Infos>
        <ChatBot></ChatBot>
      </div>
      <Outlet />
    </main>
    <footer>
    </footer>
  </>);
}
