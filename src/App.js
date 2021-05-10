import './App.css';
import { React } from 'react';
import StartPage from './StartPage/StartPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contact from './Contact/Contact';
import {AnimatePresence} from 'framer-motion'

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
            <Route path="/" exact>
                <StartPage />
          </Route>
          </Switch>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
