import React, { Suspense, lazy,useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './components/error';
import Header from './components/common/header';
import Flight from './components/flight';
import FlightContext from './contexts/flight';

const About = lazy(() => import('./components/about'));

const App = () => {
  const [context, setContext] = useState([]);
  return (
  <FlightContext.Provider value={[context, setContext]}>
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <Header></Header>
      <Switch>
        <Route exact path="/" component={Flight}/>
        <Route path="/about" component={About}/>
        <Route component={Error} />
      </Switch>
    </Suspense>
  </Router>
  </FlightContext.Provider>
);}

export default App;
