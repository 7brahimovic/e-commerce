import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import GirlsPage from './pages/girls/girls.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';

const MiyukiPage = () => (
  <div>
    <h1>MIYUKI PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/girls' component={GirlsPage} />
      <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>

  )
}
// class App extends Component {
//   render() {
//     return <div className='App'>
//       <Homepage />      
//       </div>;
//   }
// }

export default App;
