import React from 'react';
import './styles/index.sass';
import {AppRouterProvider} from './providers/router';

function App() {
  return (
    <div className={'app'}>
      <AppRouterProvider/>
    </div>
  );
}

export default App;
