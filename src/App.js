import './App.css';
import { React } from 'react';
import StartPage from './StartPage/StartPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import WeatherApp from './Weather/Weather';

function App() {

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Switch>
            <Route path="StartPage">
              <StartPage/>
            </Route>
            <Route path="/WeatherApp">
              <WeatherApp />
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
