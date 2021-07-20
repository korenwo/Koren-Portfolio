import './App.css';
import { React } from 'react';
import StartPage from './StartPage/StartPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import {AnimatePresence} from 'framer-motion'
import NewsList from './components/NewsList';

function App() {

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Switch>
            <Route path="StartPage">
              <StartPage/>
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/" exact>
              <StartPage />
          </Route>
          <Route path="/NewsList">
              <NewsList />
          </Route>
          </Switch>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
