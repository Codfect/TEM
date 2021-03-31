import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { RegisterForm } from './components/RegisterForm';


export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/agendar" component={RegisterForm} />
      </Switch>
    </BrowserRouter>
  );
}