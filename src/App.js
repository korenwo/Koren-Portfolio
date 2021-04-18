import './App.css';
import { React } from 'react';
import StartPage from './StartPage/StartPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contact from './Contact/Contact';
import MyProjects from './MyProjects/MyProjects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="StartPage">
            <StartPage/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/myProjects">
            <MyProjects />
          </Route>
          <Route path="/" exact>
              <StartPage />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
